import styled from "styled-components";

export const LoginStyle = styled.div`
  height: 80vh;
  border-top: 4px solid #ed1d25;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
`;

export const BoxLoginStyle = styled.div`
  height: 450px;
  width: 400px;
  background-color: #000;
  margin: auto;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.4);
  position: relative;
`;

export const TitleLogin = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #ed1d25;
  color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxConteudo = styled.div`
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin-top: 10px;

  input {
    background-color: #000;
    border: none;
    padding: 10px;
    width: 70%;
    margin-bottom: 20px;
    border-bottom: 2px solid #c1c1c1;
    color: #f1f1f1;
  }

  button {
    width: 80%;
    padding: 10px;
    background-color: #ed1d25;
    border: none;
    color: #c1c1c1;
    margin-top: 20px;
  }

  p {
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 10px;
    color: #f1f1f1;
  }
`;
