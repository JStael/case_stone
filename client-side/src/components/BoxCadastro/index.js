import { BoxConteudo, BoxLoginStyle, TitleLogin } from '../Login/styles';
import { Link } from 'react-router-dom';

function BoxCadastro() {
    return (
        <BoxLoginStyle>
            <TitleLogin>
                <h3>CRIAR CONTA</h3>
            </TitleLogin>
            <BoxConteudo>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Senha" />
                <input type="text" placeholder="Confirme sua senha" />
                <button>Criar conta</button>
                <p><Link to="/Login">Voltar para tela de login</Link></p>
            </BoxConteudo>
        </BoxLoginStyle>
    );
}

export default BoxCadastro;