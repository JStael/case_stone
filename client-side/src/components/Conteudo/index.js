import { ConteudoStyle, TitleStyle, Pesquisar } from '../Main/styles';
import ThumbsComics from '../ThumbsComics';
import ThumbsCharacters from '../ThumbsCharacters';

function Conteudo() {
    return (
        <>
            <ConteudoStyle>
                <TitleStyle>
                    <h2>COMICS</h2>
                    <Pesquisar placeholder="Pesquisar" />
                </TitleStyle>
                <ThumbsComics />

            </ConteudoStyle>

            <ConteudoStyle>
                <TitleStyle>
                    <h2>CHARACTERS</h2>
                    <Pesquisar placeholder="Pesquisar" />
                </TitleStyle>
                <ThumbsCharacters />

            </ConteudoStyle>
        </>
    );
}

export default Conteudo;