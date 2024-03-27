import { Container, AddButton, ExportButton } from "./styles";

// eslint-disable-next-line react/prop-types
export function QuickButtons() {
  return (
    <Container>
      <AddButton>
        <span className="material-symbols-outlined">add_circle</span>
        <h1>Adicionar Funcionário</h1>
      </AddButton>
      <AddButton>
        <span className="material-symbols-outlined">filter_alt</span>
        <h1>Filtrar</h1>
      </AddButton>
      <ExportButton>
        <span className="material-symbols-outlined">ios_share</span>
        <h1>Exportar</h1>
      </ExportButton>
    </Container>
  );
}
