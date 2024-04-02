import styled from "styled-components";

export const Container = styled.div`
  width: 590px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  padding: 40px 20px 20px 20px;
  border-radius: 15px;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cabecalho = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;

  > span {
    font-size: 25px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }
`;
