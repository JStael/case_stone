import styled from "styled-components";

export const LoginStyle = styled.div`
  height: 85vh;
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

export const BoxConteudoLogin = styled.div`
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin-top: 10px;

  p {
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    button {
      width: 80%;
      cursor: pointer;
      background-color: #ed1d25;
      border: none;
      color: #f1f1f1;
      margin-top: 20px;
      padding: 10px;
    }

    input {
      background-color: #000;
      border: none;
      padding: 10px;
      width: 70%;
      margin-bottom: 20px;
      border-bottom: 2px solid #c1c1c1;
      color: #f1f1f1;
      outline: none;
      margin-right: 5px;
    }
  }
`;

export const BoxConteudoEditar = styled.div`
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin-top: 10px;

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .botoes {
      display: flex;
      justify-content: space-around;
      width: 80%;
      height: 50px;

      button {
        width: 40%;
        cursor: pointer;
        background-color: #ed1d25;
        border: none;
        color: #f1f1f1;
        margin-top: 20px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #btn-cancelar {
        width: 40%;
        cursor: pointer;
        border: none;
        margin-top: 20px;
        padding: 10px;
        background-color: #f1f1f1;
        color: #000;
        width: 40%;
      }
    }

    .campos {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        background-color: #000;
        border: none;
        padding: 10px;
        width: 70%;
        margin-bottom: 20px;
        border-bottom: 2px solid #c1c1c1;
        color: #f1f1f1;
        outline: none;
        margin-right: 5px;
      }
    }
  }
`;

export const BoxConteudoCadastrar = styled.div`
  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: auto;

    input {
      background-color: #000;
      border: none;
      padding: 10px;
      width: 70%;
      margin-bottom: 20px;
      border-bottom: 2px solid #c1c1c1;
      color: #f1f1f1;
      outline: none;
    }

    button {
      width: 80%;
      cursor: pointer;
      background-color: #ed1d25;
      border: none;
      color: #f1f1f1;
      margin-top: 20px;
      padding: 10px;
    }

    p {
      font-size: 0.8rem;
      font-style: italic;
      margin-top: 10px;
    }
  }
`;
