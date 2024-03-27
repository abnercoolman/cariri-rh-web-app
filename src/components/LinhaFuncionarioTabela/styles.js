import styled from "styled-components";

export const Container = styled.tr`
  width: 100%;
  /* superior | direita | inferior | esquerda */
  padding: 0 30px 0 18px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > td {
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
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    > button {
      width: 156px;
      height: 53px;
      gap: 12px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      border: none;
      border-radius: 6px;
      background: ${({ theme }) => theme.COLORS.BLUE_500};
      box-shadow: 11px 4px 14px 0px rgba(0, 0, 0, 0.12);

      > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};

        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
      }

      > span {
        font-size: 22px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      &:hover {
        cursor: pointer;
      }
    }

    > .drop-content {
      display: none;
      background-color: ${({ theme }) => theme.COLORS.BLUE_300};
      position: absolute;

      width: 150px;
      justify-content: center;
      align-items: center;

      border: none;
      border-radius: 6px;

      top: 40px;
      z-index: 1;

      > a {
        color: white;
        padding: 8px 10px;
        text-decoration: none;
        display: block;
      }

      > .drop-content-line {
        width: 150px;
        height: 0.5px;
        border-radius: 8px;
        background: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    &:hover .drop-content {
      display: block;
    }
  }
`;
