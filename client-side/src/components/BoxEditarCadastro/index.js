import { BoxConteudoEditar, BoxLoginStyle, TitleLogin } from "../Login/styles";
import edit from "../../assets/icons/edit.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function BoxEditarCasdastro() {
  const { register, handleSubmit } = useForm();
  const editarUsuario = (data) => console.log(data);

  return (
    <BoxLoginStyle>
      <TitleLogin>
        <h3>EDITAR CONTA</h3>
      </TitleLogin>
      <BoxConteudoEditar>
        <form onSubmit={handleSubmit(editarUsuario)}>
          <div className="campos">
            <input {...register("nome")} placeholder="Nome" />
            <img src={edit} alt="Ícone editar" />
          </div>
          <div className="campos">
            <input {...register("sobreNome")} placeholder="Sobrenome" />
            <img src={edit} alt="Ícone editar" />
          </div>
          <div className="campos">
            <input {...register("email")} type="email" placeholder="Email" />
            <img src={edit} alt="Ícone editar" />
          </div>
          <div className="campos">
            <input {...register("senha")} type="password" placeholder="Senha" />
            <img src={edit} alt="Ícone editar" />
          </div>
          <div className="campos">
            <input
              {...register("confirmaSenha")}
              type="password"
              placeholder="Confirme sua senha"
            />
            <img src={edit} alt="Ícone editar" />
          </div>

          <div className="botoes">
            <button id="btn-cancelar">
              <Link to="/">CANCELAR</Link>
            </button>
            <button>SALVAR</button>
          </div>
        </form>
      </BoxConteudoEditar>
    </BoxLoginStyle>
  );
}

export default BoxEditarCasdastro;
