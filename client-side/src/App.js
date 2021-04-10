import Logo from './components/Logo';
import user from './assets/icons/user.svg';
import Header from "./components/Header";
import BotaoLogin from "./components/BotaoLogin";
import Main from './components/Main';
import Footer from "./components/Footer";
import Conteudo from './components/Conteudo';
import Title from './components/Title';

import './styles/settings.css';

function App() {
  return (
    <>
      <Header>
        <Logo />
        <BotaoLogin>
          <p>Faça Login ou cadastre-se</p>
          <img src={user} alt="Icone de usuário" />
        </BotaoLogin>
      </Header>
      <Main>
        <Conteudo>
          <Title>
            <h2>COMICS</h2>
          </Title>
        </Conteudo>
        <Conteudo>
          <Title>
            <h2>CHARACTERS</h2>
          </Title>
        </Conteudo>

      </Main>
      <Footer>
        <p>Desenvolvido por João Stael</p>
      </Footer>
    </>
  );
}

export default App;
