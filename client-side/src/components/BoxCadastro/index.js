import {
  BoxConteudoCadastrar,
  BoxLoginStyle,
  TitleLogin,
} from "../Login/styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";

function BoxCadastro() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const novoUsuario = async (data) => {
    const { nome, sobrenome, email, senha } = data;

    const usuario = {
      nome,
      sobrenome,
      email,
      senha,
    };

    await api
      .post("http://localhost:3001/usuarios", usuario)
      .then(({ data }) => {
        alert(data.message);
        history.push("/login");
      })
      .catch((error) => console.error("Esse é o erro:", error));
  };

  return (
    <BoxLoginStyle>
      <TitleLogin>
        <h3>CRIAR CONTA</h3>
      </TitleLogin>
      <BoxConteudoCadastrar>
        <form onSubmit={handleSubmit(novoUsuario)}>
          <input {...register("nome")} placeholder="Nome" />
          <input {...register("sobreNome")} placeholder="Sobrenome" />
          <input {...register("email")} type="email" placeholder="Email" />
          <input {...register("senha")} type="password" placeholder="Senha" />
          <input
            {...register("confirmaSenha")}
            type="password"
            placeholder="Confirme sua senha"
          />
          <button type="submit">Criar conta</button>
          <p>
            <Link to="/login">Voltar para tela de login</Link>
          </p>
        </form>
      </BoxConteudoCadastrar>
    </BoxLoginStyle>
  );
}

export default BoxCadastro;
