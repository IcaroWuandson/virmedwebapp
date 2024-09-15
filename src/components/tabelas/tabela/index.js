import React, { useState } from "react";
import {
  List,
  DownloadSimple,
  Article,
  ListChecks,
  XCircle,
  PlusCircle,
  PencilSimple,
  WhatsappLogo,
  Envelope,
  ChatCircle,
} from "@phosphor-icons/react";
import cancelarAgendamento from "../../../functions/cancelarAtendimento";
import {
  TabelaContainer,
  Cabecalho,
  CabecalhoCelula,
  Celula,
  Linha,
  MenuOpcoes,
  MenuSuspenso,
  TextMenu,
  OpcaoMenu,
} from "./styles";
import ModalPaciente from "../../modais/modalPaciente";
import styled from "styled-components";

// Função para calcular a idade
function calcularIdade(dataNascimento) {
  const dataAtual = new Date();
  const nascimento = new Date(dataNascimento);

  if (isNaN(nascimento)) {
    return null;
  }

  let anos = dataAtual.getFullYear() - nascimento.getFullYear();
  let meses = dataAtual.getMonth() - nascimento.getMonth();

  if (meses < 0 || (meses === 0 && dataAtual.getDate() < nascimento.getDate())) {
    anos--;
    meses += 12;
  }

  if (dataAtual.getDate() < nascimento.getDate()) {
    meses--;
  }

  if (meses < 0) {
    meses += 12;
  }

  return `${anos} anos ${meses} meses`;
}

// Função para obter a cor de fundo com base no status
const getBackgroundColorByStatus = (status) => {
  switch (status) {
    case "Esperando":
      return "yellow";
    case "Não compareceu":
      return "orange";
    case "Cancelado":
      return "red";
    case "Reagendado":
      return "blue";
    default:
      return "#FFF";
  }
};

// Componente estilizado para a célula do horário
const DivHorario = styled.div`
  background-color: ${(props) => getBackgroundColorByStatus(props.status)};
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 2.86vh;
  display: flex;
  border-radius: 15px;
  border: 1px solid;
`;

const Tabela = ({ dados, setDadosAgendamentos }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

  const toggleMenu = (index) => {
    setMenuAberto(!menuAberto);
    setLinhaSelecionada(index);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
    setLinhaSelecionada(null);
  };

  const handleClick = (paciente) => {
    setPacienteSelecionado(paciente);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setPacienteSelecionado(null);
  };

  return (
    <>
      <TabelaContainer>
        <Cabecalho>
          <Linha>
            <CabecalhoCelula width="3%">Horário</CabecalhoCelula>
            <CabecalhoCelula width="20%">Pacientes</CabecalhoCelula>
            <CabecalhoCelula width="15%">Idade</CabecalhoCelula>
            <CabecalhoCelula width="10%">Procedimento</CabecalhoCelula>
            <CabecalhoCelula width="5%">Sala</CabecalhoCelula>
            <CabecalhoCelula width="20%"></CabecalhoCelula>
          </Linha>
        </Cabecalho>
        <tbody>
          {dados.map((item, index) => {
            const detalheAgendamento = item.detalheAgendamento;
            const agendamentoInfo = detalheAgendamento?.[0];
            const idade = calcularIdade(item.dataNascimento);

            return (
              <Linha key={index}>
                <Celula width="3%">
                  <DivHorario onClick={() => handleClick(item)} status={item.status}>
                    {item.horaInicial}
                  </DivHorario>
                </Celula>
                <Celula width="20%" onClick={() => handleClick(item)}>
                  {item.nomePaciente}
                </Celula>
                <Celula width="15%" onClick={() => handleClick(item)}>
                  {idade}
                </Celula>
                <Celula width="10%" onClick={() => handleClick(item)}>
                  {agendamentoInfo?.agendamento || "---"}
                </Celula>
                <Celula width="5%" onClick={() => handleClick(item)}>
                  {agendamentoInfo?.sala || "---"}
                </Celula>
                <Celula width="20%">
                  <MenuSuspenso>
                    <List size={16} onClick={() => toggleMenu(index)} />
                    {linhaSelecionada === index && (
                      <MenuOpcoes aberto={menuAberto}>
                        <OpcaoMenu onClick={fecharMenu}>
                          <DownloadSimple size={16} />
                          <TextMenu>Imprimir protocolo</TextMenu>
                        </OpcaoMenu>
                        <OpcaoMenu onClick={fecharMenu}>
                          <Article size={16} />
                          <TextMenu>Enviar protocolo</TextMenu>
                        </OpcaoMenu>
                        <OpcaoMenu onClick={fecharMenu}>
                          <ListChecks size={16} />
                          <TextMenu>Enviar orientações</TextMenu>
                        </OpcaoMenu>
                        <OpcaoMenu
                          onClick={() => {
                            cancelarAgendamento(item.id, setDadosAgendamentos);
                            fecharMenu();
                          }}
                        >
                          <XCircle size={16} />
                          <TextMenu>Excluir atendimento</TextMenu>
                        </OpcaoMenu>
                        <OpcaoMenu onClick={fecharMenu}>
                          <PlusCircle size={16} />
                          <TextMenu>Adicionar procedimento</TextMenu>
                        </OpcaoMenu>
                        <OpcaoMenu onClick={fecharMenu}>
                          <PencilSimple size={16} />
                          <TextMenu>Alterar cadastro</TextMenu>
                        </OpcaoMenu>
                        <OpcaoMenu onClick={fecharMenu}>
                          <WhatsappLogo size={16} />
                          <TextMenu>Abrir conversa</TextMenu>
                        </OpcaoMenu>
                        <OpcaoMenu onClick={fecharMenu}>
                          <Envelope size={16} />
                          <TextMenu>Enviar email</TextMenu>
                        </OpcaoMenu>
                        <OpcaoMenu onClick={fecharMenu}>
                          <ChatCircle size={16} />
                          <TextMenu>Envio SMS</TextMenu>
                        </OpcaoMenu>
                      </MenuOpcoes>
                    )}
                  </MenuSuspenso>
                </Celula>
              </Linha>
            );
          })}
        </tbody>
      </TabelaContainer>
      {modalAberto && (
        <ModalPaciente
          isOpen={modalAberto}
          fecharModal={fecharModal}
          paciente={pacienteSelecionado}
        />
      )}
    </>
  );
};

export default Tabela;
