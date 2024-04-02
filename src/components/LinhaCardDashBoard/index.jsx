import { Container, FotoNomeFuncao, SubFirstDiv, SecondDiv } from "./styles";

// eslint-disable-next-line react/prop-types
export function LinhaCardDashBoard({ nome, funcao, foto }) {
  return (
    <Container>
      <FotoNomeFuncao>
        <img src={foto} alt="Foto do funcionário/candidato" />
        <SubFirstDiv>
          <h1>{nome}</h1>
          <text>{funcao}</text>
        </SubFirstDiv>
      </FotoNomeFuncao>
      <SecondDiv>
        <h2>Visualizar</h2>
        <span className="material-symbols-outlined">visibility</span>
      </SecondDiv>
    </Container>
  );
}
