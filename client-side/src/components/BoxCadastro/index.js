import {
  BoxConteudoCadastrar,
  BoxLoginStyle,
  TitleLogin,
} from "../Login/styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function BoxCadastro() {
  const { register, handleSubmit } = useForm();
  const novoUsuario = (data) => console.log(data);

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
            <Link to="/Login">Voltar para tela de login</Link>
          </p>
        </form>
      </BoxConteudoCadastrar>
    </BoxLoginStyle>
  );
}

export default BoxCadastro;
