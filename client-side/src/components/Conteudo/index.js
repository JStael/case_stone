import { ConteudoStyle, TitleStyle, Pesquisar } from "../Main/styles";
import ThumbsComics from "../ThumbsComics";
import ThumbsCharacters from "../ThumbsCharacters";
import search from "../../assets/icons/search.svg";
import { useHistory } from "react-router-dom";

function Conteudo(props) {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("auth_token");
    history.push("/login");
  };

  return (
    <>
      <ConteudoStyle>
        <TitleStyle>
          <h2>COMICS</h2>
          <Pesquisar>
            <input type="text" placeholder="Pesquisar" />
          </Pesquisar>
          <img src={search} alt="Ícone de pesquisa" />
          <button onClick={logout}>Sair</button>
        </TitleStyle>
        <ThumbsComics />
      </ConteudoStyle>

      <ConteudoStyle>
        <TitleStyle>
          <h2>CHARACTERS</h2>
          <Pesquisar placeholder="Pesquisar">
            <input type="text" placeholder="Pesquisar" />
          </Pesquisar>
          <img src={search} alt="Ícone de pesquisa" />
        </TitleStyle>
        <ThumbsCharacters />
      </ConteudoStyle>
    </>
  );
}

export default Conteudo;
