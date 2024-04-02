/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { Container, EditarInfo, DesligarFuncionario } from "./styles";

export function RightInfoFuncionario({ data }) {
  const { funcionarioId } = useParams();
  const selectedFuncionario = data.find((data) => data.id == funcionarioId);

  return (
    <Container>
      <img
        src={selectedFuncionario.imgPath}
        alt="Foto de perfil do uncionário"
      />
      <h2>Nome do Funcionário</h2>
      <h1>{selectedFuncionario.nomeFuncionario}</h1>
      <h2>Departamento</h2>
      <h1>{selectedFuncionario.deptFuncionario}</h1>
      <div>
        <div>
          <h2>Cargo</h2>
          <h1>{selectedFuncionario.cargoFuncionario}</h1>
        </div>
        <div>
          <h2>Categoria</h2>
          <h1>{selectedFuncionario.categoriaFuncionario}</h1>
        </div>
      </div>

      <div>
        <EditarInfo>
          <span className="material-symbols-outlined">edit_square</span>
          <h1>Editar Informações</h1>
        </EditarInfo>
        <DesligarFuncionario>
          <span className="material-symbols-outlined">cancel</span>
          <h1>Desligar Funcionário</h1>
        </DesligarFuncionario>
      </div>
    </Container>
  );
}
