import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  // Condições para o 'isActive'
  background: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE_500 : theme.COLORS.BLUE_700};
  width: ${({ isActive }) => (isActive ? "126px" : "0")};

  // Demais configurações
  border-radius: 0px 8px 8px 0px;
  border: none;
  margin-bottom: 12px;

  text-decoration: none;

  height: 83px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 48px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    text-decoration: none;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;

    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
