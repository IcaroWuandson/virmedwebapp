import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import {
  Container,
  ContentWrapper,
  DivButtonControls,
  DivInfos,
  DivInfosPatietes,
  DivSearch,
  Input,
  Text,
  TextData,
  TextDataPatietes,
  SliderCircle,
  SwitchContainer,
  SwitchInput,
  SwitchSlider,
  DivLine,
} from "./styles";
import TabelaAtendimentos from "../../components/tabelas/tabelaAtendimentos";
import { supabase } from "../../services/supabase";

const Atendimentos = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [dadosAgendamentos, setDadosAgendamentos] = useState([]);
  const [agendamentosHoje, setAgendamentosHoje] = useState(0);
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [texto, setTexto] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [tratamento, setTratamento] = useState("");
  const handleToggle = () => {
    setChecked(!isChecked);
  };

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = now.toLocaleDateString("pt-BR", options);
      setCurrentDate(formattedDate);
    };

    updateDate();
    const intervalId = setInterval(updateDate, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    async function fetchDados() {
      try {
        const { data: agendamentosData, error: agendamentosError } =
          await supabase.from("agendamentos").select("*");
        if (agendamentosError) {
          console.error(
            "Erro ao buscar agendamentos:",
            agendamentosError.message
          );
          return;
        }

        const { data: pacientesData, error: pacientesError } = await supabase
          .from("pacientes")
          .select("*");
        if (pacientesError) {
          console.error("Erro ao buscar pacientes:", pacientesError.message);
          return;
        }

        const agendamentosComPacientes = agendamentosData.map((agendamento) => {
          const pacienteCorrespondente = pacientesData.find(
            (paciente) => paciente.cpf === agendamento.cpfPaciente
          );

          return {
            ...agendamento,
            nomePaciente: pacienteCorrespondente
              ? pacienteCorrespondente.nome
              : "",
            cpf: pacienteCorrespondente ? pacienteCorrespondente.cpf : "",
            dataNascimento: pacienteCorrespondente
              ? pacienteCorrespondente.dataNascimento
              : null,
            detalheAgendamento: agendamento.detalheAgendamento
              ? JSON.parse(agendamento.detalheAgendamento)
              : null,
          };
        });

        setDadosAgendamentos(agendamentosComPacientes);

        filtrarAgendamentos("dia", agendamentosComPacientes);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchDados();
  }, []);

  const filtrarAgendamentos = (periodo, dados) => {
    const hoje = new Date();
    let dadosFiltrados = [];

    if (periodo === "dia") {
      const hojeStr = hoje.toISOString().split("T")[0];
      dadosFiltrados = dados.filter(
        (agendamento) => agendamento.dataDoAgendamento === hojeStr
      );
    } else if (periodo === "semana") {
      const inicioSemana = new Date(
        hoje.setDate(hoje.getDate() - hoje.getDay())
      );
      const fimSemana = new Date(hoje.setDate(inicioSemana.getDate() + 6));
      dadosFiltrados = dados.filter((agendamento) => {
        const dataAgendamento = new Date(agendamento.dataDoAgendamento);
        return dataAgendamento >= inicioSemana && dataAgendamento <= fimSemana;
      });
    } else if (periodo === "mes") {
      const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
      const fimMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
      dadosFiltrados = dados.filter((agendamento) => {
        const dataAgendamento = new Date(agendamento.dataDoAgendamento);
        return dataAgendamento >= inicioMes && dataAgendamento <= fimMes;
      });
    }

    setDadosFiltrados(dadosFiltrados);
  };

  useEffect(() => {
    const calcularAgendamentosHoje = () => {
      const hoje = new Date().toISOString().split("T")[0];

      const agendamentosHoje = dadosAgendamentos.filter((agendamento) => {
        const dataAgendamento = agendamento.dataDoAgendamento;
        return dataAgendamento === hoje;
      });

      setAgendamentosHoje(agendamentosHoje.length);
    };

    calcularAgendamentosHoje();
  }, [dadosAgendamentos]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();

        if (sessionError) {
          console.error("Erro ao obter sessão:", sessionError.message);
          return;
        }

        if (!sessionData || !sessionData.session || !sessionData.session.user) {
          console.error("Usuário não está logado ou sessão indisponível");
          return;
        }

        const loggedInUserId = sessionData.session.user.id;

        const { data: profileData, error } = await supabase
          .from("profiles")
          .select("tratamento")
          .eq("id", loggedInUserId)
          .single();

        if (error) {
          console.error("Erro ao buscar tratamento:", error.message);
          return;
        }

        setTratamento(profileData.tratamento);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  console.log(dadosAgendamentos);
  const brDate = new Date(
    "Mon Apr 22 2024 15:19:30 GMT-0300 (Horário Padrão de Brasília)"
  );
  const isoString = brDate.toISOString();
  console.log("Data no formato ISO:", isoString);

  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <DivInfos>
          <Text>Olá, {tratamento}</Text>
          <TextData>{currentDate}</TextData>
        </DivInfos>

        <DivButtonControls>
          <DivInfosPatietes>
            <TextDataPatietes>
              {agendamentosHoje} pacientes para hoje
            </TextDataPatietes>
          </DivInfosPatietes>

          <DivSearch>
            <Input
              type="text"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="O que você procura?"
            />

            <SwitchContainer>
              <SwitchInput
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
              />
              <SwitchSlider isChecked={isChecked}>
                <SliderCircle isChecked={isChecked} />
              </SwitchSlider>
            </SwitchContainer>
          </DivSearch>
        </DivButtonControls>
        <DivLine>
          <TabelaAtendimentos dados={dadosFiltrados} />
        </DivLine>
      </ContentWrapper>
    </Container>
  );
};

export default Atendimentos;
