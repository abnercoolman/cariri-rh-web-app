import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.COLORS.GRAY_300_M};
    color: ${({ theme }) => theme.COLORS.BLACK};
}

body, input, button, textarea {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    outline: none;
}`;
