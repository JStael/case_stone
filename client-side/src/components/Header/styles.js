import styled from 'styled-components';
import logo from '../../assets/img/Logo.svg';


export const HeaderStyle = styled.header`
    width: 100%;
    height: 20vh;
    padding: 5px auto;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img.attrs({ src: logo, alt: 'Logo Marvel' })`
    width: 220px;
`;

export const BotaoLogin = styled.button`
    width: 120px;
    height: 35px;
    border: 2px solid #fff;
    border-radius: 50px;
    display: flex;
    position: absolute;
    right: 20px;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    
    background-color: #000;
    color: #fff;

    p {
        font-size: .6rem;
        width: 80px;
    }
`;
