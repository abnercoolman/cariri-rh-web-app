/* eslint-disable react/prop-types */
import { Header } from "../../components/Header";
import { FuncionarioTabela } from "../../components/FuncionarioTabela";
import {
  Container,
  Brand,
  Menu,
  Content,
  TituloConteudo,
  DashboardFoco,
} from "./styles";
import { QuickButtons } from "../../components/QuickButtons";
import { MenuButton } from "../../components/MenuButton";

export function TelaFuncionarios({ data }) {
  return (
    <Container>
      <Brand>
        <img src="../src/assets/icone-cariri-rh.png" alt="Logotipo CaririRH" />
      </Brand>
      <Header />
      <Menu>
        <MenuButton title="Home" titleIcon="home" toLink="/" />
        <MenuButton
          title="Funcionários"
          titleIcon="group"
          isActive
          toLink="/funcionarios"
        />
        <MenuButton title="Relatório" titleIcon="description" />
        <MenuButton title="Calendário" titleIcon="calendar_month" />
        <MenuButton title="Candidaturas" titleIcon="work" />
      </Menu>
      <Content>
        <TituloConteudo>
          <h1>Gestão de Funcionários</h1>
        </TituloConteudo>
        <DashboardFoco>
          <QuickButtons />
          <FuncionarioTabela data={data} />
        </DashboardFoco>
      </Content>
    </Container>
  );
}
