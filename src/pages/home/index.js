import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddressBook,
  Stethoscope,
  User,
  Money,
  GearSix,
  CalendarCheck,
} from "@phosphor-icons/react";
import {
  HomeContainer,
  TextCard,
  Body,
  Card,
  CardContainer,
  DivIcon,
  GraficContainer,
  SliderCircle,
  SwitchContainer,
  SwitchInput,
  SwitchSlider,
  DivSign,
  TextSign,
  DivInfo,
  TextInfo,
} from "./styles";
import { Header } from "../../components/header";
import { supabase } from "../../services/supabase";

function Home() {
  const navigate = useNavigate();
  const [agendamentosHoje, setAgendamentosHoje] = useState(0);
  const [dadosAgendamentos, setDadosAgendamentos] = useState([]);

  const [isChecked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!isChecked);
  };

  const handleCardClick = (cardNumber) => {
    if (cardNumber === 1) {
      navigate(`/plataforma/agenda`);
    } else if (cardNumber === 2) {
      navigate(`/plataforma/atendimentos`);
    } else if (cardNumber === 3) {
      navigate(`/plataforma/pacientes`);
    } else if (cardNumber === 4) {
      navigate(`/plataforma/financeiro`);
    } else if (cardNumber === 5) {
      navigate(`/plataforma/configurações`);
    }
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

          if (!pacienteCorrespondente) {
          } else {
          }
          const agendamentoComPaciente = {
            ...agendamento,
            nomePaciente: pacienteCorrespondente
              ? pacienteCorrespondente.nome
              : "",
            cpf: pacienteCorrespondente ? pacienteCorrespondente.cpf : "",
            dataNascimento: pacienteCorrespondente
              ? pacienteCorrespondente.dataNascimento
              : null,
          };

          try {
            agendamentoComPaciente.detalheAgendamento = JSON.parse(
              agendamento.detalheAgendamento
            );
          } catch (error) {
            console.error(
              "Erro ao fazer o parse dos detalhes do agendamento:",
              error
            );
            agendamentoComPaciente.detalheAgendamento = null;
          }

          return agendamentoComPaciente;
        });

        setDadosAgendamentos(agendamentosComPacientes);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchDados();
  }, []);

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

  return (
    <HomeContainer>
      <Header />
      <Body>
        <CardContainer>
          <DivSign>
            <TextSign>Assinatura digital</TextSign>
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
          </DivSign>

          <Card onClick={() => handleCardClick(1)}>
            <DivIcon>
              <AddressBook size={28} />
            </DivIcon>
            <TextCard>Agenda</TextCard>
            <DivInfo>
              <CalendarCheck size={18} />
              <TextInfo> {agendamentosHoje} pacientes/hoje</TextInfo>
            </DivInfo>
          </Card>
          <Card onClick={() => handleCardClick(2)}>
            <DivIcon>
              <Stethoscope size={28} />
            </DivIcon>
            <TextCard>Atendimentos</TextCard>
          </Card>
          <Card onClick={() => handleCardClick(3)}>
            <DivIcon>
              <User size={28} />
            </DivIcon>
            <TextCard>Pacientes</TextCard>
          </Card>
          <Card onClick={() => handleCardClick(4)}>
            <DivIcon>
              <Money size={28} />
            </DivIcon>
            <TextCard>Financeiro</TextCard>
          </Card>
          <Card onClick={() => handleCardClick(5)}>
            <DivIcon>
              <GearSix size={28} />
            </DivIcon>
            <TextCard>Configurações</TextCard>
          </Card>
        </CardContainer>

        <GraficContainer>
          <span>espaço</span>
        </GraficContainer>
      </Body>
    </HomeContainer>
  );
}

export default Home;
