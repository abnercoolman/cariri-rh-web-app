import { LinhaCardDashBoard } from "../LinhaCardDashBoard";
import { Container, Cabecalho } from "./styles";

// eslint-disable-next-line react/prop-types
export function CardDashBoard({ title }) {
  return (
    <Container>
      <Cabecalho>
        <h1>{title}</h1>
        <span className="material-symbols-outlined">more_vert</span>
      </Cabecalho>
      <LinhaCardDashBoard
        nome="John Doe"
        funcao="Função: Gerente de Produto"
        foto="/src/assets/foto_01_dashboard_principal.png"
      />
      <LinhaCardDashBoard
        nome="John Doe"
        funcao="Função: Gerente de Produto"
        foto="/src/assets/foto_02_dashboard_principal.png"
      />
      <LinhaCardDashBoard
        nome="John Doe"
        funcao="Função: Gerente de Produto"
        foto="/src/assets/foto_03_dashboard_principal.png"
      />
    </Container>
  );
}
