import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext();

export function TechProvider({ children }) {
  const [tech, setTech] = useState([]);
  const [identify, setIdentify] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [techTitle, setTechTitle] = useState("");
  const [techStatus, setTechStatus] = useState("Iniciante");

  async function handleAddTech(event) {
    event.preventDefault();
    try {
      const token = localStorage.getItem("@KENZIEHUBTOKEN");
      const response = await api.post(
        "users/techs",
        {
          title: techTitle,
          status: techStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTech([...tech, response.data]);
      setTechTitle("");
      setTechStatus("Iniciante");
      toast.success("Tecnologia adicionada com sucesso!");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  async function handleDeleteTech(techId) {
    try {
      const token = localStorage.getItem("@KENZIEHUBTOKEN");
      await api.delete(`users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTech((prevTech) => prevTech.filter((tech) => tech.id !== techId));
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir tecnologia");
    }
  }

  async function handleEditTech(formData) {
    try {
      if (!identify) {
        toast.error("Identificação da tecnologia não definida");
        return;
      }
      const token = localStorage.getItem("@KENZIEHUBTOKEN");
      const { data } = await api.put(`users/techs/${identify.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTech((prevTech) => prevTech.map((tech) => (tech.id === identify.id ? data : tech)));
      setIsModalOpen(false);
      setIdentify(null);
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      toast.error("Error ao atualizar tecnologia");
    }
  }

  return (
    <TechContext.Provider
      value={{
        tech,
        setTech,
        identify,
        setIdentify,
        isModalOpen,
        setIsModalOpen,
        techTitle,
        setTechTitle,
        techStatus,
        setTechStatus,
        handleAddTech,
        handleDeleteTech,
        handleEditTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
