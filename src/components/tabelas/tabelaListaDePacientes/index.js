import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import {
  List,
  Envelope,
  FilePlus,
  Folder,
  WhatsappLogo,
  Notepad,
  Money,
} from "@phosphor-icons/react";

import {
  TextButtonAtender,
  TextButtonHistory,
  TextMenu,
  TabelaContainer,
  CabecalhoCelula,
  Celula,
  Cabecalho,
  OpcaoMenu,
  Linha,
  MenuOpcoes,
  MenuSuspenso,
  ButtonHistory,
  ButtonAtender,
} from "./styles";

const TabelaListaDePacientes = ({ dados }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (index) => {
    setMenuAberto(!menuAberto);
    setLinhaSelecionada(index);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
    setLinhaSelecionada(null);
  };

  const handleNavigateToProntuario = (pacienteId) => {
    navigate(`/plataforma/prontuario/${pacienteId}`);
  };

  return (
    <TabelaContainer>
      <Cabecalho>
        <Linha>
          <CabecalhoCelula width="2%">Código</CabecalhoCelula>
          <CabecalhoCelula width="10%">Paciente</CabecalhoCelula>
          <CabecalhoCelula width="9%">Data de Nascimento</CabecalhoCelula>
          <CabecalhoCelula width="5%">CPF</CabecalhoCelula>
          <CabecalhoCelula width="10%">Contato Principal</CabecalhoCelula>
          <CabecalhoCelula width="10%">Último atendimento</CabecalhoCelula>
          <CabecalhoCelula width="7%"></CabecalhoCelula>
          <CabecalhoCelula width="7%"></CabecalhoCelula>
          <CabecalhoCelula width="10%"></CabecalhoCelula>
        </Linha>
      </Cabecalho>
      <tbody>
        {dados.map((item, index) => (
          <Linha key={index}>
            <Celula width="2%">{item.id}</Celula>
            <Celula width="15%">{item.nome}</Celula>
            <Celula width="9%">{item.dataNascimento}</Celula>
            <Celula width="9%">{item.cpf}</Celula>
            <Celula width="10%">{item.telefone1}</Celula>
            <Celula width="5%">{item.ultimoAtendimento}</Celula>
            <Celula width="12%">
              <ButtonHistory>
                <TextButtonHistory>Ver histórico</TextButtonHistory>
              </ButtonHistory>
            </Celula>
            <Celula width="12%">
              <ButtonAtender>
                <TextButtonAtender
                  onClick={() => handleNavigateToProntuario(item.id)}
                >
                  Clique e atenda
                </TextButtonAtender>
              </ButtonAtender>
            </Celula>
            <Celula width="10%">
              <MenuSuspenso>
                <List size={14} onClick={() => toggleMenu(index)} />
                {linhaSelecionada === index && (
                  <MenuOpcoes aberto={menuAberto}>
                    <OpcaoMenu onClick={fecharMenu}>
                      <Envelope size={14} />
                      <TextMenu>Enviar email</TextMenu>
                    </OpcaoMenu>

                    <OpcaoMenu onClick={fecharMenu}>
                      <WhatsappLogo size={14} />
                      <TextMenu>Enviar WhatsApp</TextMenu>
                    </OpcaoMenu>

                    <OpcaoMenu onClick={fecharMenu}>
                      <FilePlus size={14} />
                      <TextMenu>Anexar arquivos</TextMenu>
                    </OpcaoMenu>

                    <OpcaoMenu onClick={fecharMenu}>
                      <Folder size={14} />
                      <TextMenu>Visualizar arquivo</TextMenu>
                    </OpcaoMenu>

                    <OpcaoMenu onClick={fecharMenu}>
                      <Notepad size={14} />
                      <TextMenu>Ver histórico</TextMenu>
                    </OpcaoMenu>

                    <OpcaoMenu onClick={fecharMenu}>
                      <Money size={14} />
                      <TextMenu>Registros financeiros</TextMenu>
                    </OpcaoMenu>
                  </MenuOpcoes>
                )}
              </MenuSuspenso>
            </Celula>
          </Linha>
        ))}
      </tbody>
    </TabelaContainer>
  );
};

export default TabelaListaDePacientes;
