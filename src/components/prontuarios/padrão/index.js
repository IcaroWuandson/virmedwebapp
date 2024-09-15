import React, { useState, useEffect, useRef } from "react";
import {
  ButtonSave,
  ButtonSaveExit,
  ButtonSaveModel,
  DivBody,
  DivButtons,
  DivContainerInputs,
  DivContainerModelos,
  DivContainerTextsEditors,
  DivFlex,
  DivFlex2,
  DivFlex3,
  DivInfoAtendimento,
  DivInfos,
  DivModelos,
  DivTextInfos,
  Input,
  StyledAccordionButton,
  StyledAccordionItem,
  StyledAccordionPanel,
  TextButton,
  TextHeaderAtendimento,
  TextInfos,
  TimeConsulte,
  TitleButtons,
} from "./styles";
import Avatar from "../../avatar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ModelDocumentSpace from "../ModeloDocumento";
import EditorAnamnese from "./editorAnamenese";
import EditorMedicacoes from "./editorMedicacoes";
import EditorExame from "./editorExame";
import EditorAntecendentes from "./editorAntecendentes";
import EditorComplementares from "./editorComplementares";
import EditorConduta from "./editorCondunta";

import { supabase } from "../../../services/supabase";
import DivHistoryMed from "../historicoMedico";

const ProntuarioPadrão = ({ paciente }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const queixaPrincipalRef = useRef(null);
  const cidRef = useRef(null);
  const horaInicial = paciente.agendamento?.horaInicial || "N/A";

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const calcularIdade = (dataNascimento) => {
    const dataNascimentoObj = new Date(dataNascimento);
    const hoje = new Date();

    let anos = hoje.getFullYear() - dataNascimentoObj.getFullYear();
    let meses = hoje.getMonth() - dataNascimentoObj.getMonth();
    let dias = hoje.getDate() - dataNascimentoObj.getDate();

    if (
      meses < 0 ||
      (meses === 0 && hoje.getDate() < dataNascimentoObj.getDate())
    ) {
      anos--;
      meses += 12;
    }

    const idadeFormatada = `${anos} anos, ${meses} meses e ${dias} dias`;
    return idadeFormatada;
  };

  const hojeFormatado = () => {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    let mes = hoje.getMonth() + 1;
    let dia = hoje.getDate();

    if (mes < 10) {
      mes = `0${mes}`;
    }
    if (dia < 10) {
      dia = `0${dia}`;
    }

    return `${ano}-${mes}-${dia}`;
  };

  const [tempoConsulta, setTempoConsulta] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTempoConsulta((tempoConsulta) => tempoConsulta + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatarTempo = (segundos) => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    return `${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;
  };

  const editorAnamneseRef = useRef(null);
  const editorMedicacoesRef = useRef(null);
  const editorExameRef = useRef(null);
  const editorAntecendentesRef = useRef(null);
  const editorComplementaresRef = useRef(null);
  const editorCondutaRef = useRef(null);

  const coletarDadosEditores = () => {
    const dados = {};
    dados.pacienteId = paciente.paciente.id;
    dados.pacienteNome = paciente.paciente.nome;
    dados.idAgendamento = paciente.agendamento.id;
    dados.tempoConsulta = tempoConsulta;
    dados.queixaPrincipal = queixaPrincipalRef.current.value;
    dados.cid = cidRef.current.value;
    dados.status = "finalizada";

    if (editorAnamneseRef.current) {
      dados.anamnese = editorAnamneseRef.current.getContent();
    } else {
      console.warn("Anamnese editor ref is null");
    }

    if (editorMedicacoesRef.current) {
      dados.medicacoes = editorMedicacoesRef.current.getContent();
    } else {
      console.warn("Medicacoes editor ref is null");
    }

    if (editorExameRef.current) {
      dados.exame = editorExameRef.current.getContent();
    } else {
      console.warn("Exame editor ref is null");
    }

    console.log("Dados coletados dos editores:", dados);

    return dados;
  };

  const salvarDados = async () => {
    const dados = coletarDadosEditores();

    const { error } = await supabase.from("prontuario").insert([dados]);

    if (error) {
      toast.error("Erro ao salvar os dados ");
    } else {
      toast.success("Dados salvos com sucesso!");
    }
  };

  console.log(paciente);

  return (
    <>
      <DivInfos>
        <Avatar />

        <DivTextInfos>
          <TextInfos>Paciente: {paciente.paciente.nome}</TextInfos>
          <TextInfos>
            Idade: {calcularIdade(paciente.paciente.dataNascimento)}
          </TextInfos>
          <TextInfos>
            Contato:{" "}
            {paciente.paciente.telefone1 ||
              paciente.paciente.telefone2 ||
              paciente.paciente.whatsapp ||
              "nenhum telefone cadastrado"}
          </TextInfos>
        </DivTextInfos>

        <DivInfoAtendimento>
          <TextHeaderAtendimento>Atendimento</TextHeaderAtendimento>
          <DivFlex>
            <DivFlex>
              <TextInfos>Data:</TextInfos>
              <Input type="date" defaultValue={hojeFormatado()} readOnly />
            </DivFlex>
            <DivFlex>
              <TextInfos>Hora:</TextInfos>
              <Input
                type="time"
                value={
                  paciente.agendamento ? paciente.agendamento.horaInicial : ""
                }
                readOnly
              />
            </DivFlex>
          </DivFlex>
          <DivFlex3>
            <TextInfos>Tempo de consulta:</TextInfos>
            <TimeConsulte>{formatarTempo(tempoConsulta)} </TimeConsulte>{" "}
          </DivFlex3>
        </DivInfoAtendimento>
      </DivInfos>

      <DivContainerInputs>
        <div>
          <TextInfos>Queixa principal:</TextInfos>
          <Input ref={queixaPrincipalRef} customWidth="17vw" />
        </div>
        <div>
          <TextInfos>CID:</TextInfos>
          <Input ref={cidRef} customWidth="17vw" />
        </div>
      </DivContainerInputs>
      <>
        <DivBody>
          <DivContainerTextsEditors>
            <StyledAccordionItem>
              <StyledAccordionButton onClick={() => toggleAccordion(0)}>
                <TitleButtons>Anamnese</TitleButtons>
                <span>{activeIndex === 0 ? "▲" : "▼"}</span>
              </StyledAccordionButton>

              {activeIndex === 0 && (
                <StyledAccordionPanel>
                  <EditorAnamnese
                    ref={editorAnamneseRef}
                    dadosPaciente={paciente.paciente}
                  />
                </StyledAccordionPanel>
              )}
            </StyledAccordionItem>

            <StyledAccordionItem>
              <StyledAccordionButton onClick={() => toggleAccordion(1)}>
                <TitleButtons>Medicações em uso</TitleButtons>
                <span>{activeIndex === 1 ? "▲" : "▼"}</span>
              </StyledAccordionButton>

              {activeIndex === 1 && (
                <StyledAccordionPanel>
                  <EditorMedicacoes
                    ref={editorMedicacoesRef}
                    dadosPaciente={paciente.paciente}
                  />
                </StyledAccordionPanel>
              )}
            </StyledAccordionItem>

            <StyledAccordionItem>
              <StyledAccordionButton onClick={() => toggleAccordion(2)}>
                <TitleButtons>Exame físico</TitleButtons>
                <span>{activeIndex === 2 ? "▲" : "▼"}</span>
              </StyledAccordionButton>

              {activeIndex === 2 && (
                <StyledAccordionPanel>
                  <EditorExame
                    ref={editorExameRef}
                    dadosPaciente={paciente.paciente}
                  />
                </StyledAccordionPanel>
              )}
            </StyledAccordionItem>

            <StyledAccordionItem>
              <StyledAccordionButton onClick={() => toggleAccordion(3)}>
                <TitleButtons>Antecendentes pessoais e familiares</TitleButtons>
                <span>{activeIndex === 3 ? "▲" : "▼"}</span>
              </StyledAccordionButton>

              {activeIndex === 3 && (
                <StyledAccordionPanel>
                  <EditorAntecendentes
                    ref={editorAntecendentesRef}
                    dadosPaciente={paciente.paciente}
                  />
                </StyledAccordionPanel>
              )}
            </StyledAccordionItem>

            <StyledAccordionItem>
              <StyledAccordionButton onClick={() => toggleAccordion(4)}>
                <TitleButtons>Exames complementares</TitleButtons>
                <span>{activeIndex === 4 ? "▲" : "▼"}</span>
              </StyledAccordionButton>

              {activeIndex === 4 && (
                <StyledAccordionPanel>
                  <EditorComplementares
                    ref={editorComplementaresRef}
                    dadosPaciente={paciente.paciente}
                  />
                </StyledAccordionPanel>
              )}
            </StyledAccordionItem>

            <StyledAccordionItem>
              <StyledAccordionButton onClick={() => toggleAccordion(5)}>
                <TitleButtons>Conduta</TitleButtons>
                <span>{activeIndex === 5 ? "▲" : "▼"}</span>
              </StyledAccordionButton>

              {activeIndex === 5 && (
                <StyledAccordionPanel>
                  <EditorConduta
                    ref={editorCondutaRef}
                    dadosPaciente={paciente.paciente}
                  />
                </StyledAccordionPanel>
              )}
            </StyledAccordionItem>
          </DivContainerTextsEditors>

          <ModelDocumentSpace pacienteDados={paciente.paciente} />
          <DivHistoryMed dados={paciente.paciente} />
        </DivBody>
        <DivButtons>
          <ButtonSave onClick={salvarDados}>
            <TextButton>Salvar</TextButton>
          </ButtonSave>

          <ButtonSaveExit>
            <TextButton>Salvar e sair</TextButton>
          </ButtonSaveExit>
        </DivButtons>
      </>
    </>
  );
};

export default ProntuarioPadrão;
