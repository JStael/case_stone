import { ConteudoStyle, TitleStyle, Pesquisar } from "../Main/styles";
import ThumbsComics from "../ThumbsComics";
import ThumbsCharacters from "../ThumbsCharacters";
import search from "../../assets/icons/search.svg";

function Conteudo() {
  return (
    <>
      <ConteudoStyle>
        <TitleStyle>
          <h2>COMICS</h2>
          <Pesquisar placeholder="Pesquisar" />
          <img src={search} alt="Ícone de pesquisa" />
        </TitleStyle>
        <ThumbsComics />
      </ConteudoStyle>

      <ConteudoStyle>
        <TitleStyle>
          <h2>CHARACTERS</h2>
          <Pesquisar placeholder="Pesquisar" />
          <img src={search} alt="Ícone de pesquisa" />
        </TitleStyle>
        <ThumbsCharacters />
      </ConteudoStyle>
    </>
  );
}

export default Conteudo;
