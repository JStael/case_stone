import BoxLogin from '../components/BoxLogin';
import { LoginStyle } from '../components/Login/styles';
import { TitleStyle } from '../components/Main/styles';

function Login() {
    return (
        <>
            <LoginStyle>
                <TitleStyle>
                    <h2>ÁREA DO USUÁRIO</h2>
                </TitleStyle>
                <BoxLogin />
            </LoginStyle>
        </>
    );
}

export default Login;