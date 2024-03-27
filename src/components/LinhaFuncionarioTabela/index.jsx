/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function LinhaFuncionarioTabela({ data }) {
  return (
    <Container>
      <td>{data.nomeFuncionario}</td>
      <td>{data.deptFuncionario}</td>
      <td>{data.cargoFuncionario}</td>
      <td>{data.dataAdmissao}</td>
      <td>{data.categoriaFuncionario}</td>
      <td>{data.generoFuncionario}</td>
      <td>
        <button>
          <h1>Ações</h1>
          <span className="material-symbols-outlined">expand_circle_down</span>
        </button>
        <div className="drop-content">
          <a href="#">Ver Perfil</a>
          <div className="drop-content-line"></div>
          <a href="#">Editar Perfil</a>
        </div>
      </td>
    </Container>
  );
}

{
  /* <Link to={`/funcionarios/${data.id}`}>Ações</Link> */
}
