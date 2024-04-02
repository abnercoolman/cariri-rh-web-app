import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 677px;
  padding: 35px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background: ${({ theme }) => theme.COLORS.WHITE};

  > img {
    width: 188px;
    height: 188px;
    margin-bottom: 20px;

    border-radius: 94px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE_100};
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 20px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > h1 {
        color: ${({ theme }) => theme.COLORS.BLACK};
        text-align: center;
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 20px;
      }

      > h2 {
        color: ${({ theme }) => theme.COLORS.BLACK};
        text-align: center;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
`;

export const EditarInfo = styled(Link)`
  background: ${({ theme }) => theme.COLORS.BLUE_300};
  /* vertical | horizontal */
  padding: 8px 15px;
  gap: 8px;

  border: none;
  border-radius: 8px;

  text-decoration: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  > span {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const DesligarFuncionario = styled.button`
  background: ${({ theme }) => theme.COLORS.RED_500};
  /* vertical | horizontal */
  padding: 8px 15px;
  gap: 8px;

  border: none;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  > span {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &:hover {
    cursor: pointer;
  }
`;
