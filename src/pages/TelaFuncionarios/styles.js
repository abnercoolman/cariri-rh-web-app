import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 126px auto;
  grid-template-rows: 83px auto;
  grid-template-areas:
    "brand header"
    "menu content";
`;

export const Brand = styled.div`
  grid-area: "brand";
  background: ${({ theme }) => theme.COLORS.BLUE_700};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > img {
    width: 87px;
    height: 41px;
  }
`;

export const Menu = styled.div`
  grid-area: "menu";
  padding-top: 71px;

  background: ${({ theme }) => theme.COLORS.BLUE_700};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Content = styled.div`
  grid-area: "content";

  width: 100%;
  height: 100%;
  padding: 27px;

  justify-content: center;
  align-items: center;
`;

export const TituloConteudo = styled.div`
  /* superior | direita | inferior | esquerda */
  padding: 13px 0 13px 10px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};

    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
  }
`;

export const DashboardFoco = styled.div`
  width: 100%;
  height: 90%;

  /* vertical | horizontal */
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.WHITE};
`;
