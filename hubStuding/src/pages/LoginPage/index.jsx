import { useContext } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { StyledContainerForm } from "./style";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginPage = () => {
  const { signIn, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submit = (data) => {
    signIn(data);
    reset();
  };

  return (
    <StyledContainerForm>
      <main>
        <img src={Logo} alt="Minha Imagem" />
        <section>
          <form onSubmit={handleSubmit(submit)}>
            <h1>Login</h1>
            <input type="text" name="email" {...register("email")} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}
            <input type="password" name="password" {...register("password")} placeholder="Senha" />
            {errors.password && <p>{errors.password.message}</p>}
            <button type="submit" disabled={loading}>
              {loading ? "Carregando..." : "Entrar"}
            </button>
            <h2>Ainda não possui uma conta?</h2>
            <Link to="/register" className="secondBtn" type="submit">
              Cadastro
            </Link>
          </form>
        </section>
      </main>
    </StyledContainerForm>
  );
};
