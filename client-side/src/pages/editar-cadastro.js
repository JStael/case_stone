import BoxEditarCadastro from "../components/BoxEditarCadastro";
import { LoginStyle, Wrapper } from "../components/Login/styles";
import { TitleStyle } from "../components/Main/styles";

function EditarCadastro() {
  return (
    <LoginStyle>
      <TitleStyle>
        <h2>ÁREA DO USUÁRIO</h2>
      </TitleStyle>
      <Wrapper>
        <BoxEditarCadastro />
      </Wrapper>
    </LoginStyle>
  );
}

export default EditarCadastro;
