import styled from "styled-components";

export const Container = styled.tr`
  width: 100%;
  /* superior | direita | inferior | esquerda */
  padding: 0 30px 0 18px;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRAY_400};

  > th {
    width: 167px;
    height: 54px;
    vertical-align: center;
    /* topo | horizontal | inferior */
    margin: 2px auto 12px;

    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    text-align: center;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.BLACK};

    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }
`;
