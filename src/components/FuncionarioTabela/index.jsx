/* eslint-disable react/prop-types */
import { CabecalhoFuncionarioTabela } from "../CabecalhoFuncionarioTabela";
import { LinhaFuncionarioTabela } from "../LinhaFuncionarioTabela";
import { Container } from "./styles";

export function FuncionarioTabela({ data }) {
  return (
    <Container>
      <CabecalhoFuncionarioTabela />
      {data.map((data) => (
        <LinhaFuncionarioTabela key={data.id} data={data} />
      ))}
    </Container>
  );
}

{
  /* <Link to={`/funcionarios/${data.id}`}>Ações</Link> */
}
