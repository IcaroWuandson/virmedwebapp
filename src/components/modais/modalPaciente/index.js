import React, { useState } from "react";
import {
  ModalBackground,
  ModalContent,
  CloseButton,
  DivFlex,
  TextInfos,
  TextInfosInside,
  TextHeader,
  Select,
  DivSelect,
  ButtonSave,
  Input,
} from "./styles";
import { XCircle } from "@phosphor-icons/react";
import { supabase } from "../../../services/supabase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function calcularIdade(dataNascimento) {
  const dataAtual = new Date();
  const nascimento = new Date(dataNascimento);

  let anos = dataAtual.getFullYear() - nascimento.getFullYear();
  let meses = dataAtual.getMonth() - nascimento.getMonth();

  if (
    meses < 0 ||
    (meses === 0 && dataAtual.getDate() < nascimento.getDate())
  ) {
    anos--;
    meses += 12;
  }

  if (meses === 0) {
    return `${anos} anos`;
  }

  return `${anos} anos ${meses} meses`;
}

const ModalPaciente = ({ isOpen, fecharModal, paciente }) => {
  const [status, setStatus] = useState(paciente.status || "");
  const [horaInicial, setHoraInicial] = useState(paciente.horaInicial || "");
  const [horaFinal, setHoraFinal] = useState(paciente.horaFinal || "");
  const [dataAgendamento, setDataAgendamento] = useState(
    paciente.dataDoAgendamento || ""
  );

  console.log(paciente);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const atualizarAgendamento = async () => {
    try {
      const updates = {
        status,
        horaInicial,
        horaFinal,
        dataDoAgendamento: dataAgendamento,
      };

      const { data, error } = await supabase
        .from("agendamentos")
        .update(updates)
        .eq("id", paciente.id);

      if (error) {
        console.error("Erro ao atualizar o agendamento:", error);
        toast.error("Erro ao atualizar o agendamento");
      } else {
        console.log("Agendamento atualizado com sucesso:", data);
        toast.success("Agendamento atualizado com sucesso");
      }
    } catch (error) {
      console.error("Erro ao atualizar o agendamento:", error);
      toast.error("Erro ao atualizar o agendamento");
    }
  };

  const atualizarStatus = async () => {
    try {
      let updates = { status };

      if (status === "Esperando") {
        const horaAtual = new Date().toLocaleTimeString();
        updates.chegada = horaAtual;
      }

      const { data, error } = await supabase
        .from("agendamentos")
        .update(updates)
        .eq("id", paciente.id);

      if (error) {
        toast.error("Erro ao atualizar o status");
      } else {
        toast.success("Status atualizado com sucesso");
      }
    } catch (error) {
      toast.error("Erro ao atualizar o status");
    }
  };

  const salvarMudancas = () => {
    atualizarAgendamento();
    atualizarStatus();
    fecharModal();
  };

  return (
    <ModalBackground isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={fecharModal}>
          <XCircle size={24} />
        </CloseButton>
        {paciente && (
          <>
            <TextHeader>Informações do agendamento</TextHeader>
            <DivFlex>
              <TextInfos>Nome:</TextInfos>
              <TextInfosInside>{paciente.nomePaciente}</TextInfosInside>
              <TextInfos>CPF:</TextInfos>
              <TextInfosInside>{paciente.cpf || "Sem CPF"}</TextInfosInside>
              <TextInfos>Idade:</TextInfos>
              <TextInfosInside>
                {calcularIdade(paciente.dataNascimento)}
              </TextInfosInside>
            </DivFlex>

            {paciente.detalheAgendamento &&
              paciente.detalheAgendamento.length > 0 &&
              paciente.detalheAgendamento.map((detalhe, index) => (
                <DivFlex key={index}>
                  <TextInfos>Procedimento:</TextInfos>
                  <TextInfosInside>{detalhe.agendamento}</TextInfosInside>

                  {detalhe.sala && (
                    <>
                      <TextInfos>Sala:</TextInfos>
                      <TextInfosInside>{detalhe.sala}</TextInfosInside>
                    </>
                  )}
                  {detalhe.profissional && (
                    <>
                      <TextInfos>Profissional:</TextInfos>
                      <TextInfosInside>{detalhe.profissional}</TextInfosInside>
                    </>
                  )}
                </DivFlex>
              ))}

            <DivFlex>
              <TextInfos>Horário início:</TextInfos>
              <Input
                customWidth="7vw"
                type="time"
                value={horaInicial}
                onChange={(e) => setHoraInicial(e.target.value)}
              />
              <TextInfos>Horário fim:</TextInfos>
              <Input
                customWidth="7vw"
                type="time"
                value={horaFinal}
                onChange={(e) => setHoraFinal(e.target.value)}
              />
            </DivFlex>
            <DivFlex>
              <TextInfos>Data do agendamento:</TextInfos>
              <Input
                customWidth="10vw"
                type="date"
                value={dataAgendamento}
                onChange={(e) => setDataAgendamento(e.target.value)}
              />
            </DivFlex>

            <DivSelect>
              <Select value={status} onChange={handleStatusChange}>
                <option value="">Status do paciente</option>
                <option value="Esperando">Esperando</option>
                <option value="Não compareceu">Não compareceu</option>
                <option value="Cancelado">Cancelado</option>
                <option value="Reagendado">Reagendado</option>
              </Select>
              <ButtonSave onClick={salvarMudancas}>Salvar</ButtonSave>
            </DivSelect>
          </>
        )}
      </ModalContent>
    </ModalBackground>
  );
};

export default ModalPaciente;
