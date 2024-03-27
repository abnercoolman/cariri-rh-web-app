import { Container, AddButton } from "./styles";

// eslint-disable-next-line react/prop-types
export function QuickStats() {
  return (
    <Container>
      <AddButton>
        <div className="numStat">13</div>
        <div className="descStat">
          Entrevistas
          <br /> Agendadas
        </div>
      </AddButton>

      <AddButton>
        <div className="numStat">10</div>
        <div className="descStat">
          Aprovações
          <br /> Pendentes
        </div>
      </AddButton>

      <AddButton>
        <div className="numStat">6</div>
        <div className="descStat">
          Treinamentos
          <br /> Pendentes
        </div>
      </AddButton>
    </Container>
  );
}
