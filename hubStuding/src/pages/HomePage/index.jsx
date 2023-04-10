import Logo from "../../assets/Logo.svg";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const HomePage = () => {
  const { setIdentify, setIsModalOpen, handleDeleteTech, tech } = useContext(TechContext);

  const [user, setUser] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getIitem("KENZIEHUBUSER");
      const response = await api.get(`/users/${userId}`);
      setUser(response.data);
    };
    getUser();
  }, []);

  const logout = () => {
    setUser([]);
    localStorage.removeItem("@KENZIEHUBTOKEN");
    localStorage.removeItem("@KENZIEHUBUSER");
    navigate("/");
  };

  return (
    <div>
      <main>
        <header>
          <img src={Logo} alt="Logo Kenzie" />
          <button classeName="secondBtn" onClinck={logout}>
            Sair
          </button>
        </header>
        <section>
          <div className="infoUser">
            <h1>Olá, {user.name}</h1>
            <h4>Modulo: {user.course_module}</h4>
          </div>

          <div className="showModal">
            <h2>Tecnologia</h2>
            <Link onClinck={() => setModal(!modal)}>
              <span>+</span>
            </Link>
          </div>

          <div className="registerTech"></div>

          <div className="infoTechUser"></div>
        </section>
      </main>
    </div>
  );
};
