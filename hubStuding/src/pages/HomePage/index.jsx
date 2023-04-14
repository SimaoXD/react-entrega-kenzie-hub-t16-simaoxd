import Logo from "../../assets/Logo.svg";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { TechContext } from "../../providers/TechContext";
import StyledHome from "./style";

export const HomePage = () => {
  const { setIdentify, setIsModalOpen, handleDeleteTech, tech } = useContext(TechContext);

  const [user, setUser] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem("@KENZIEHUBUSER");
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
    <StyledHome>
      <main>
        <header>
          <img src={Logo} alt="Logo Kenzie" />
          <button className="secondBtn" onClick={logout}>
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
            <Link onClick={() => setModal(!modal)}>
              <span>+</span>
            </Link>
          </div>

          {/* <TechUpdate /> */}

          <div className="registerTech">{modal && <Modal />}</div>

          <div className="infoTechUser">
            <ul>
              {tech.techs &&
                tech.techs.map((tech) => (
                  <li
                    key={tech.id}
                    id={tech.id}
                    onClick={() => {
                      console.log(tech);
                      setIdentify(tech);
                      setIsModalOpen(true);
                    }}
                  >
                    <p>{tech.title}</p>
                    <div>
                      <p>{tech.status}</p>

                      <Link onClick={() => handleDeleteTech(tech.id)}>
                        <img src={lixeira} alt="Lixeira excluir" />
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </main>
    </StyledHome>
  );
};
