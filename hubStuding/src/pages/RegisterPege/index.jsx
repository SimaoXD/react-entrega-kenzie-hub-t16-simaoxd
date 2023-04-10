import { useContext } from "react";

import { UserContext } from "../../providers/UserContext";
import Logo from "../../assets/Logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./validator";
import { Link } from "react-router-dom";
import { StyledContainerForm } from "./style";

export const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submit = (data) => {
    registerUser(data);
    reset();
  };
  return (
    <StyledContainerForm>
      <header>
        <img src={Logo} alt="Logo Kenzie" />
        <Link to="/" className="secondBtn" type="submit">
          Voltar
        </Link>
      </header>
      <main>
        <form onSubmit={handleSubmit(registerUser)}>
          <h1>Crie sua conta</h1>
          <h2>Rapido e gratis, vamos nessa...</h2>
          <p>{errors.name?.message}</p>
          <div>
            <label htmlFor="">Nome</label>
            <input type="text" id="name" {...register("name")} placeholder="Nome" />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="text" id="email" {...register("email")} placeholder="Email" />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="">Senha</label>
            <input type="password" id="senha" {...register("password")} placeholder="Senha" />
            <p>{errors.password?.message}</p>
          </div>

          <div>
            <label htmlFor="">Confirmação</label>
            <input type="password" id="confirme" {...register("confirm")} placeholder="Confirme a senha" />
            <p>{errors.confirm?.massege}</p>
          </div>

          <div>
            <label htmlFor="">Contato</label>
            <input type="text" id="contato" {...register("contact")} placeholder="Contato" />
            <p>{errors.contact?.message}</p>
          </div>

          <div>
            <label htmlFor="">Modulo</label>
            <select {...register("course_module")}>
              <option value="Primeiro Modulo">Primeiro Modulo</option>
              <option value="Segundo Modulo">Segundo Modulo</option>
              <option value="Terceiro Modulo">Terceiro Modulo</option>
              <option value="Quarto Modulo">Quarto Modulo</option>
              <option value="Quinto Modulo">Quinto Modulo</option>
            </select>
            <p>{errors.course_module?.message}</p>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </StyledContainerForm>
  );
};
