import styled from 'styled-components';

export const MainStyle = styled.main`
    min-height: 80vh;
    margin-bottom: 5vh;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ConteudoStyle = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    min-height: 42.5vh;
    display: flex;
    flex-direction: column;
    border-top: 4px solid #ed1d25;
`;

export const TitleStyle = styled.div`
    position: relative;
    width: 100%;
    height: 5vh;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-style: italic;
        color: #fff;
        background-color: #ed1d25;
    }
`;

export const Pesquisar = styled.input`
    position: absolute;
    right: 10px;
    width: 230px;
    height: 20px;
    background-color: #000;
    border: none;
    border-bottom: 2px solid #fff;
    color: #fff;

    ::placeholder {
        font-style: italic;
    }
`;

export const WrapperThumbs = styled.div`
    height: 90%;
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const urlImg = (props) => `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Thumbs = styled.div`
    background: #000;
    color: #f1f1f1;
    height: 250px;
    width: 150px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

    h2 {
        padding: 5px;
        font-size: .8rem;
        font-weight: 500;
    }

    p {
        padding: 5px;
        font-size: .7rem;
    }

    div#img {
        height: 190px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;

        transition: all 1s; 
    }

    &:hover {
        #img {
            height: 50px;
            cursor: pointer;
        }
    }
`;

export const BotaoVerMais = styled.button`
    width: 80px;
    height: 40px;
    background-color: #000;
    color: #f1f1f1;
    position: absolute;
    bottom: 20px;
    right: 30px;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:hover {
        background-color: #ed1d25;
        transition: all .5s;
    }
`;