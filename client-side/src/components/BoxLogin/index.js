import { BoxConteudoLogin, BoxLoginStyle, TitleLogin } from "../Login/styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";

function BoxLogin() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const loginUsuario = async (data) => {
    const { email, senha } = data;

    const usuario = {
      email,
      senha,
    };

    await api
      .post("http://localhost:3001/login", usuario)
      .then(({ data }) => {
        localStorage.setItem("auth_token", data.token);
        history.push("/");
      })
      .catch((error) => {
        console.error("Esse é o erro:", error);
        alert("Usuário e/ou senha inválido(s)!");
      });
  };

  return (
    <BoxLoginStyle>
      <TitleLogin>
        <h3>LOGIN</h3>
      </TitleLogin>
      <BoxConteudoLogin>
        <form onSubmit={handleSubmit(loginUsuario)}>
          <input {...register("email")} type="email" placeholder="Email" />
          <input {...register("senha")} type="password" placeholder="Senha" />
          <button type="submit">Logar</button>
        </form>
        <p>
          Ainda não é cadastrado? <Link to="/cadastro">Cadastre-se!</Link>
        </p>
      </BoxConteudoLogin>
    </BoxLoginStyle>
  );
}

export default BoxLogin;
