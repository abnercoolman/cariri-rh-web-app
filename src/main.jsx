import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { FUNCIONARIOS_MOCK } from "./mock/funcionarios.mock.js";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes data={FUNCIONARIOS_MOCK} />
    </ThemeProvider>
  </React.StrictMode>
);
