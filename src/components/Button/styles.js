import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 8px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:disabled {
    opacity: 0.5;
  }
`;