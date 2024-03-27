import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: none;
  /* vertical | horizontal */
  padding: 12px 0;
  gap: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const AddButton = styled.button`
  background: ${({ theme }) => theme.COLORS.BLUE_300};
  height: 30px;
  /* vertical | horizontal */
  padding: 0 6px;
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
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ExportButton = styled.button`
  background: ${({ theme }) => theme.COLORS.GREEN};
  height: 30px;
  /* vertical | horizontal */
  padding: 0 12px;
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
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &:hover {
    cursor: pointer;
  }
`;
