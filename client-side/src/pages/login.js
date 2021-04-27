import BoxLogin from "../components/BoxLogin";
import { LoginStyle, Wrapper } from "../components/Login/styles";
import { TitleStyle } from "../components/Main/styles";

function login() {
  return (
    <LoginStyle>
      <TitleStyle>
        <h2>ÁREA DO USUÁRIO</h2>
      </TitleStyle>
      <Wrapper>
        <BoxLogin />
      </Wrapper>
    </LoginStyle>
  );
}

export default login;
