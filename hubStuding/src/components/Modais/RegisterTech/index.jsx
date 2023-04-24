import React, { useContext, useEffect } from "react";

import { StyledModal } from "./style";
import { TechContext } from "../../../providers/TechContext";
import { api } from "../../../services/api";

export const ModalTech = () => {
  const { handleAddTech, techStatus, setIsModalOpen, setTechStatus, setTech, techTitle, setTechTitle } = useContext(TechContext);

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem("@KENZIEHUBUSER");
      const response = await api.get(`users/${userId}`);
      setTech(response.data);
    };
    getUser();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <section>
        <div>
          <StyledModal>
            <form onSubmit={handleAddTech}>
              <div className="HeaderModalTech">
                <h4> Cadastra Tecnologia</h4>
                <button type="button" onClick={closeModal} className="closeBtn">
                  X
                </button>
              </div>

              <input
                type="text"
                placeholder="Nome da tecnologia"
                value={techTitle}
                onChange={(event) => setTechTitle(event.target.value)}
              />
              <select value={techStatus} onChange={(event) => setTechStatus(event.target.value)}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button type="submit" to="/home">
                Adicionar
              </button>
            </form>
          </StyledModal>
        </div>
      </section>
    </main>
  );
};
