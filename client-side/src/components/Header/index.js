import { HeaderStyle, Logo } from './styles';
import Botao from '../BotaoLogin/index';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <HeaderStyle>
                <Link to="/">
                    <Logo />
                </Link>
                <Botao />
            </HeaderStyle>
        </>
    );
}

export default Header;