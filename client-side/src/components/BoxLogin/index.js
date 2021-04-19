import { BoxConteudoLogin, BoxLoginStyle, TitleLogin } from "../Login/styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function BoxLogin() {
  const { register, handleSubmit } = useForm();
  const loginUsuario = (data) => console.log(data);

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
