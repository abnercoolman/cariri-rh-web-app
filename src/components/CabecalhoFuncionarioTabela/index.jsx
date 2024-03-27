/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function CabecalhoFuncionarioTabela() {
  return (
    <Container>
      <th>Nome</th>
      <th>Dept.</th>
      <th>Cargo</th>
      <th>Admissão</th>
      <th>Categoria</th>
      <th>Gênero</th>
      <th>Ações</th>
    </Container>
  );
}