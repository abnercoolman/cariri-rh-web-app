import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 17px 38px 13px 19px;
  border-radius: 15px;
  border: none;

  margin-top: 13px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const FotoNomeFuncao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 14px;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;

export const SubFirstDiv = styled.div`
  > h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: left;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  > text {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
  }

  > span {
    border-radius: 4px;
    background: ${({ theme }) => theme.COLORS.BLUE_500};
    width: 35px;
    height: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-content: center;

    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
