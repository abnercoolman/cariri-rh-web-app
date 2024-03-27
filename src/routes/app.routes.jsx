/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import { TelaFuncionarios } from "../pages/TelaFuncionarios";
import { TelaPrincipal } from "../pages/TelaPrincipal";
// import { TelaPerfilFuncionario } from "../pages/TelaPerfilFuncionario";

export function AppRoutes({ data }) {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<TelaPrincipal data={data} />} />

      {/* Tela Funcionários */}
      <Route path="/funcionarios" element={<TelaFuncionarios data={data} />} />

      {/* Tela Perfil Funcionário */}
      {/* <Route
        path="/profile/:funcionarioId"
        element={<TelaPerfilFuncionario />}
      /> */}
    </Routes>
  );
}
