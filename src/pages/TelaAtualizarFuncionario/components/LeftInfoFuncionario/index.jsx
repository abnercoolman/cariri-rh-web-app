/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function LeftInfoFuncionario() {
  return (
    <Container>
      <button className="buttonActive">Dados Pessoais</button>
      <button>Dados de Contato</button>
      <button>Dados Acadêmicos / Qualificações</button>
      <button>Dados Bancários</button>
    </Container>
  );
}