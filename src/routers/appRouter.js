import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Agenda from "../pages/agenda";
import Financeiro from "../pages/financeiro";
import Pacientes from "../pages/pacientes";
import Atendimentos from "../pages/atendimentos";
import Configs from "../pages/configurações";
import CadastroDePacientes from "../components/cadastroDePacientes";
import Prontuario from "../pages/prontuario";
import QuitarValores from "../pages/quitarValores";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/financeiro" element={<Financeiro />} />
      <Route path="/pacientes" element={<Pacientes />} />
      <Route path="/atendimentos" element={<Atendimentos />} />
      <Route path="/configurações" element={<Configs />} />
      <Route path="/cadastrar-paciente" element={<CadastroDePacientes />} />
      <Route path="/prontuario/:id" element={<Prontuario />} />
      <Route path="/quitar-valores" element={<QuitarValores />} />
    </Routes>
  );
};

export default AppRouter;
