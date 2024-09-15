import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import TabelaListaDePacientes from "../../components/tabelas/tabelaListaDePacientes";
import { Gift } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase";
import {
  Container,
  ContentWrapper,
  TextButtonCreate,
  TextHeader,
  TextInfoPatiets,
  DivButtonControls,
  DivInfosPatietes,
  DivLine,
  ButtonCreatePatients,
  Input,
} from "./styles";

const Pacientes = () => {
  const navigate = useNavigate();
  const [texto, setTexto] = useState("");
  const [dadosTabela, setDadosTabela] = useState([]);

  useEffect(() => {
    async function fetchPacientes() {
      const { data, error } = await supabase.from("pacientes").select("*");
      if (error) {
        console.error("Erro ao buscar pacientes:", error.message);
        return;
      }
      setDadosTabela(
        data
          .map((paciente) => ({
            ...paciente,
            dataNascimento: formatDate(new Date(paciente.dataNascimento)),
          }))
          .reverse()
      );
    }

    fetchPacientes();
  }, []);

  const handleClick = () => {
    navigate("/plataforma/cadastrar-paciente");
  };

  function formatDate(date) {
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <TextHeader>Lista de pacientes</TextHeader>
        <DivButtonControls>
          <ButtonCreatePatients onClick={handleClick}>
            <TextButtonCreate>Criar paciente</TextButtonCreate>
          </ButtonCreatePatients>

          <Input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="O que você procura?"
          />

          <DivInfosPatietes>
            <Gift size={23} />
            <TextInfoPatiets>Aniversariantes</TextInfoPatiets>
          </DivInfosPatietes>
        </DivButtonControls>
        <DivLine>
          <TabelaListaDePacientes dados={dadosTabela} />
        </DivLine>
      </ContentWrapper>
    </Container>
  );
};
export default Pacientes;
