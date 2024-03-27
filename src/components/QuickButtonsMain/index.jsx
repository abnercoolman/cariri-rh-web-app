import { Container, AddButton } from "./styles";

// eslint-disable-next-line react/prop-types
export function QuickButtonsMain() {
  return (
    <Container>
      <AddButton>
        <span className="material-symbols-outlined">add_circle</span>
        <h1>Adicionar Funcionário</h1>
      </AddButton>
      <AddButton>
        <span className="material-symbols-outlined">add_circle</span>
        <h1>Adicionar Candidatura</h1>
      </AddButton>
    </Container>
  );
}
