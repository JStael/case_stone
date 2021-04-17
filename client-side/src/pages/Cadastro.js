import BoxCadastro from '../components/BoxCadastro';
import { LoginStyle, Wrapper } from '../components/Login/styles';
import { TitleStyle } from '../components/Main/styles';

function Login() {
    return (
        <LoginStyle>
            <TitleStyle>
                <h2>ÁREA DO USUÁRIO</h2>
            </TitleStyle>
            <Wrapper>
                <BoxCadastro />
            </Wrapper>
        </LoginStyle>
    );
}

export default Login;