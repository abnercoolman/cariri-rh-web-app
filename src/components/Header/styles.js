import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 83px;
  padding: 0 50px;

  background: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0px 4px 20px 0px rgba(91, 91, 91, 0.13);

  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: #071c50;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;

    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 16px;
    }

    > input {
      width: 425px;
      height: 40px;
      padding-left: 16px;

      border-radius: 8px;
      border: 1px solid rgba(8, 39, 119, 0.24);
      background: rgba(229, 237, 249, 0.44);

      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const DropdownList = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;
