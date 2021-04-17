import { BoxConteudo, BoxLoginStyle, TitleLogin } from "../Login/styles";
import { Link } from "react-router-dom";

function BoxLogin() {
  return (
    <BoxLoginStyle>
      <TitleLogin>
        <h3>LOGIN</h3>
      </TitleLogin>
      <BoxConteudo>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Logar</button>
        <p>
          Ainda não é cadastrado? <Link to="/cadastro">Cadastre-se!</Link>
        </p>
      </BoxConteudo>
    </BoxLoginStyle>
  );
}

export default BoxLogin;
