import styled from "styled-components";

export const Container = styled.div`
  border: none;
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const AddButton = styled.button`
  border: none;
  background: none;
  position: relative;

  > .numStat {
    display: block;
    z-index: 1;

    border-radius: 30px;
    border: 1px solid rgba(8, 39, 119, 0.51);
    background: ${({ theme }) => theme.COLORS.GRAY_50};
    padding: 28px;

    color: ${({ theme }) => theme.COLORS.BLUE_700};

    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
  }

  > .descStat {
    /* vertical | horizontal */
    padding: 20px 80px;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.GRAY_50};

    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    opacity: 0.5;

    position: absolute;
    display: block;
    top: 20%;
    left: 10%;
    z-index: -1;
  }
`;
