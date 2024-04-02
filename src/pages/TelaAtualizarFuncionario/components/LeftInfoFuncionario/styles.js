import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 424px;
  padding: 35px 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 15px;
  background: ${({ theme }) => theme.COLORS.WHITE};

  > .buttonActive {
    width: 100%;
    height: 78px;

    border: none;
    border-radius: 15px;
    background: ${({ theme }) => theme.COLORS.ORANGE_100};

    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
  }

  > button {
    width: 100%;
    height: 78px;

    border: none;
    border-radius: 15px;
    background: ${({ theme }) => theme.COLORS.GRAY_400};

    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
  }
`;