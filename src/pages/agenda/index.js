import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import { Note } from "@phosphor-icons/react";
import Calendario from "../../components/calendario";

import { supabase } from "../../services/supabase";
import {
  Container,
  ContentWrapper,
  DivBottomInfos,
  DivButtonControls,
  DivControlsInfos,
  DivInfos,
  DivPatientes,
  DivSeparetor2,
  DivSeparetor,
  DivText,
  DivTopInfos,
  Text,
  TextButton,
  TextButtonControls,
  TextButtonControls2,
  TextData,
  TextPatients,
  Select,
  ButtonBlue,
  ButtonGray,
  ButtonLong,
  ButtonShort,
  ButtonWhite,
  Name,
  Input,
  DivButtonColors,
  DivAgenda,
} from "./styles";
import ModalAgendamento from "../../components/modais/modalAgendamento";
import ComponentAgenda from "../../components/agenda";

const Agenda = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [texto, setTexto] = useState("");
  const [dadosAgendamentos, setDadosAgendamentos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profissionais, setProfissionais] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [agendamentosHoje, setAgendamentosHoje] = useState(0);

  const [dadosFiltrados, setDadosFiltrados] = useState([]);

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

  const ordenarAgendamentos = (dados) => {
    return dados.sort((a, b) => {
      const dataA = new Date(a.dataDoAgendamento + " " + a.horaInicio);
      const dataB = new Date(b.dataDoAgendamento + " " + b.horaInicio);
      return dataA - dataB;
    });
  };

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
          const profissionalCorrespondente = profissionais.find(
            (profissional) => profissional.id === agendamento.profissionalId
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
            nomeProfissional: profissionalCorrespondente
              ? profissionalCorrespondente.nomeCompleto
              : "",
          };
        });
        const agendamentosOrdenados = ordenarAgendamentos(
          agendamentosComPacientes
        );

        setDadosAgendamentos(agendamentosComPacientes);

        filtrarAgendamentos("dia", agendamentosOrdenados);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchDados();

    const subscription = supabase
      .channel("agendamentos")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "agendamentos",
        },
        (payload) => {
          console.log("Mudança detectada:", payload);

          fetchDados();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      const { data: profissionais } = await supabase
        .from("profissionais")
        .select("*");

      setProfissionais(profissionais);
    }

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    const profissionalSelecionado = event.target.value;
    setSelectedName(profissionalSelecionado);
    filtrarAgendamentosPorProfissional(
      profissionalSelecionado,
      dadosAgendamentos
    );
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

    if (selectedName) {
      dadosFiltrados = dadosFiltrados.filter(
        (agendamento) => agendamento.nomeProfissional === selectedName
      );
    }

    setDadosFiltrados(dadosFiltrados);
  };

  const filtrarPorDataSelecionada = (dataSelecionada) => {
    const dadosFiltrados = dadosAgendamentos.filter(
      (agendamento) => agendamento.dataDoAgendamento === dataSelecionada
    );
    setDadosFiltrados(dadosFiltrados);
  };

  const filtrarAgendamentosPorProfissional = (
    profissionalSelecionado,
    dados
  ) => {
    if (profissionalSelecionado) {
      const dadosFiltrados = dados.filter((agendamento) => {
        const profissionalNome = agendamento.nomeProfissional;
        const detalheAgendamentoProfissional =
          agendamento.detalheAgendamento?.[0]?.profissional;

        return (
          profissionalNome === profissionalSelecionado ||
          detalheAgendamentoProfissional === profissionalSelecionado
        );
      });
      setDadosFiltrados(dadosFiltrados);
    } else {
      setDadosFiltrados(dados);
    }
  };

  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <DivInfos>
          <DivText>
            <Text>Agenda</Text>
            <TextData>{currentDate}</TextData>
          </DivText>
        </DivInfos>
        <DivTopInfos>
          <DivSeparetor>
            <DivPatientes>
              <TextPatients>
                {agendamentosHoje} atendimentos para hoje
              </TextPatients>
            </DivPatientes>
          </DivSeparetor>

          <DivControlsInfos>
            <Select onChange={handleSelectChange}>
              <option value="">Selecionar Profissional</option>
              {profissionais.map((profissional) => (
                <option key={profissional.id} value={profissional.nomeCompleto}>
                  {profissional.nomeCompleto}
                </option>
              ))}
            </Select>

            <Name>{selectedName || "Nenhum profissional selecionado"}</Name>

            <Input
              type="text"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="O que você procura?"
            />
          </DivControlsInfos>
        </DivTopInfos>

        <DivBottomInfos>
          <DivSeparetor2>
            <DivButtonControls>
              <ButtonShort
                onClick={() => filtrarAgendamentos("dia", dadosAgendamentos)}
              >
                <TextButton>Dia</TextButton>
              </ButtonShort>

              <ButtonLong
                onClick={() => filtrarAgendamentos("semana", dadosAgendamentos)}
              >
                <TextButton>Semana</TextButton>
              </ButtonLong>

              <ButtonShort
                onClick={() => filtrarAgendamentos("mes", dadosAgendamentos)}
              >
                <TextButton>Mês</TextButton>
              </ButtonShort>

              <ButtonLong>
                <TextButton>Lista Semanal</TextButton>
              </ButtonLong>
            </DivButtonControls>

            <Calendario onDateChange={filtrarPorDataSelecionada} />
            <DivButtonColors>
              <ButtonWhite>
                <TextButtonControls>Pacientes em espera</TextButtonControls>
              </ButtonWhite>
              <ButtonGray onClick={() => setIsModalOpen(true)}>
                <TextButtonControls>Novo agendamento</TextButtonControls>
              </ButtonGray>{" "}
              <ButtonGray>
                <TextButtonControls>Adicionar encaixe</TextButtonControls>
              </ButtonGray>
              <ButtonGray>
                <TextButtonControls>Exportar agenda</TextButtonControls>
              </ButtonGray>
              <ButtonGray>
                <TextButtonControls>Realizar orçamento</TextButtonControls>
              </ButtonGray>
              <ButtonWhite>
                <TextButtonControls>Configurar escala</TextButtonControls>
              </ButtonWhite>
              <ButtonBlue>
                <TextButtonControls2>Imprimir agenda</TextButtonControls2>
                <Note size={12} />
              </ButtonBlue>
            </DivButtonColors>
          </DivSeparetor2>

          <DivAgenda>
            <ComponentAgenda />
          </DivAgenda>
        </DivBottomInfos>
      </ContentWrapper>
      {isModalOpen && <ModalAgendamento onClose={handleCloseModal} />}
    </Container>
  );
};

export default Agenda;
