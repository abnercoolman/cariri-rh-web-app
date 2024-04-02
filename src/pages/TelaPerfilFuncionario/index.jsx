/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import {
  Container,
  Brand,
  Menu,
  Content,
  TituloConteudo,
  Dashboard,
} from "./styles";
import { LeftInfoFuncionario } from "./components/LeftInfoFuncionario";
import { RightInfoFuncionario } from "./components/RightInfoFuncionario";

import { MenuButton } from "../../components/MenuButton";

export function TelaPerfilFuncionario({ data }) {
  const { funcionarioId } = useParams();
  const selectedFuncionario = data.find((data) => data.id == funcionarioId);

  return (
    <Container>
      <Brand>
        <img src="../src/assets/icone-cariri-rh.png" alt="Logotipo CaririRH" />
      </Brand>
      <Header />
      <Menu>
        <MenuButton title="Home" titleIcon="home" isActive toLink="/" />
        <MenuButton
          title="Funcionários"
          titleIcon="group"
          toLink="/funcionarios"
        />
        <MenuButton title="Relatório" titleIcon="description" />
        <MenuButton title="Calendário" titleIcon="calendar_month" />
        <MenuButton title="Candidaturas" titleIcon="work" />
      </Menu>
      <Content>
        <TituloConteudo>
          <h1>
            Gestão de Funcionários / Perfil do Funcionário / {data.id}
            {selectedFuncionario.nomeFuncionario}
          </h1>
        </TituloConteudo>
        <Dashboard>
          <LeftInfoFuncionario />
          <RightInfoFuncionario data={data} />
        </Dashboard>
      </Content>
    </Container>
  );
}
