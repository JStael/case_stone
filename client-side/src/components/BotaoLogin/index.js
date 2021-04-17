import { BotaoLogin } from '../Header/styles';
import user from '../../assets/icons/user.svg';
import { Link } from 'react-router-dom';

function Botao() {
    return (
        <Link to="/login">
            <BotaoLogin>
                <p>Faça Login ou cadastre-se</p>
                <img src={user} alt="Icone de usuário" />
            </BotaoLogin>
        </Link>
    );
}

export default Botao;