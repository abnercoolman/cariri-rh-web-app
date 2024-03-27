/* eslint-disable react/prop-types */
import { Header } from "../../components/Header";
import { Container, Brand, Menu, Content, TituloConteudo } from "./styles";
import { MenuButton } from "../../components/MenuButton";
import { QuickButtonsMain } from "../../components/QuickButtonsMain";
import { QuickStats } from "../../components/QuickStats";

export function TelaPrincipal() {
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
          <h1>Visão Geral</h1>
          <QuickButtonsMain />
        </TituloConteudo>
        <QuickStats />
      </Content>
    </Container>
  );
}
