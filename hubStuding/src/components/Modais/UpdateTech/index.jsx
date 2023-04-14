import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { useForm } from "react-hook-form";
import { StyledModalUpdate } from "./style";
import Modal from "react-modal";

export const TechUpdate = () => {
  const { handleEditTech, setIsModalOpen, isModalOpen, handleDeleteTech, tech } = useContext(TechContext);
  const { register, handleSubmit } = useForm();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (formData) => {
    await handleEditTech(formData);
    closeModal();
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <StyledModalUpdate>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="HeaderModalTech">
              <p>Tecnologia Detalhes</p>
              <button onClick={closeModal} className="closeBtn">
                X
              </button>
            </div>
            <div className="InputTitle">
              <label htmlFor="title">Titulo</label>
              <input type="text" placeholder="Titulo" id="title" label="Titulo" />
            </div>

            <div>
              <label htmlFor="level">Status</label>
              <select {...register("status")} id="level">
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <div className="BtnsFoModaloter">
              <button type="submit" className="f5tech">
                {" "}
                Salvar Alterações
              </button>
              <button onClick={() => handleDeleteTech(tech.id)} className="DelTech">
                Excluir
              </button>
            </div>
          </form>
        </StyledModalUpdate>
      </Modal>
    </div>
  );
};
