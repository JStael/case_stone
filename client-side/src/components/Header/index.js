import { HeaderStyle, Logo } from './styles';
import Botao from '../BotaoLogin/index';

function Header() {
    return (
        <>
            <HeaderStyle>
                <Logo />
                <Botao />
            </HeaderStyle>
        </>
    );
}

export default Header;