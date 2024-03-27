import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  padding: 0 50px;

  border: none;
  border-radius: 6px;
  border-collapse: collapse;

  background: ${({ theme }) => theme.COLORS.WHITE};
`;
