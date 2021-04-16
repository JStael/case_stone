import { BotaoLogin } from '../Header/styles';
import user from '../../assets/icons/user.svg';

function Botao() {
    return (
        <>
            <BotaoLogin>
                <p>Faça Login ou cadastre-se</p>
                <img src={user} alt="Icone de usuário" />
            </BotaoLogin>
        </>
    );
}

export default Botao;