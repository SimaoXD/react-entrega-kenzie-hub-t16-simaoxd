import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUserLog] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KENZIEHUBTOKEN");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("https://kenziehub.herokuapp.com/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserLog(response.data);
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, []);

  const signIn = async (data) => {
    setLoading(true);

    try {
      const response = await api.post("https://kenziehub.herokuapp.com/sessions", data);
      const { user, token } = response.data;
      toast.success("Login realizado com sucesso!");
      setUserLog(user);

      localStorage.setItem("@KENZIEHUBTOKEN", token);
      localStorage.setItem("@KENZIEHUBUSER", user.id);
      navigate("/home", { replace: true });
    } catch (error) {
      toast.error("Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await api.post("https://kenziehub.herokuapp.com/users", data);

      const id = response.data.id;

      toast.success("Cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const userLogout = () => {
    setUserLog(null);
    localStorage.removeItem("@KENZIEHUBTOKEN");
    navigate("/login");
  };

  return <UserContext.Provider value={{ signIn, registerUser, userLogout, loading, user }}>{children}</UserContext.Provider>;
};
