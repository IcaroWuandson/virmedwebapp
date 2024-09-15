import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { StyleSheetManager } from "styled-components";
import {
  DivFlex,
  DivSeparator,
  FormContainer,
  FormGroup,
  Input,
  Label,
  LabelHorario,
  TextLabelEspecial,
  DivControlsSala,
  ButtonSave,
  DivInfosSala,
  DivTotal,
  TextAreaInput,
  Select,
  StyledAutocomplete,
  DivInfoTotal,
  DivFlex2,
} from "./styles";
import { PlusCircle } from "@phosphor-icons/react";
import TabelaSalaAgendamento from "../../tabelas/tabelaSalaAgendamento";
import { supabase } from "../../../services/supabase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormAgendamentModal = () => {
  const [formData, setFormData] = useState({
    dataDoAgendamento: "",
    horaInicial: "",
    horaFinal: "",
    convenio: "",
    agendamento: "",
    profissional: "",
    sala: "",
    valor: "",
    observacoes: "",
  });
  const [salas, setSalas] = useState([]);
  const [configAgendamentos, setConfigAgendamentos] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [dadosTabela, setDadosTabela] = useState([]);
  const [total, setTotal] = useState(0);
  const [pacientes, setPacientes] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchPacientes() {
      const { data: pacientes } = await supabase.from("pacientes").select("*");
      setPacientes(pacientes);
    }
    fetchPacientes();
  }, []);

  const handleAutocompleteChangePaciente = (event, value) => {
    if (value && value.id && value.nome) {
      setFormData((prevData) => ({
        ...prevData,
        paciente: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        paciente: {},
      }));
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { data: salas } = await supabase.from("salas").select("*");
      const { data: configAgendamentos } = await supabase
        .from("configAgendamentos")
        .select("*");
      const { data: profissionais } = await supabase
        .from("profissionais")
        .select("*");

      setSalas(salas);
      setConfigAgendamentos(configAgendamentos);
      setProfissionais(profissionais);
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAutocompleteChange = (event, value) => {
    setFormData((prevData) => ({
      ...prevData,
      agendamento: value?.nome || "",
      valor: value?.valor || "",
    }));
  };

  const handleAdicionar = () => {
    const { dataDoAgendamento, horaInicial, horaFinal, ...agendamentoData } =
      formData;
    setDadosTabela([...dadosTabela, agendamentoData]);

    setFormData((prevData) => ({
      ...prevData,
      convenio: "",
      agendamento: "",
      profissional: "",
      sala: "",
      valor: "",
    }));
  };

  useEffect(() => {
    const calculateTotal = () => {
      const totalSum = dadosTabela.reduce((sum, item) => {
        return sum + parseFloat(item.valor || 0);
      }, 0);
      setTotal(totalSum);
    };
    calculateTotal();
  }, [dadosTabela]);

  const handleSaveAll = async () => {
    try {
      const paciente = formData.paciente;

      if (!paciente.id || !paciente.nome) {
        return;
      }

      const singleRowData = {
        dataDoAgendamento: formData.dataDoAgendamento,
        horaInicial: formData.horaInicial,
        horaFinal: formData.horaFinal,
        paciente_id: paciente.id,
        nomePaciente: paciente.nome,
        cpfPaciente: paciente.cpf,
        detalheAgendamento: dadosTabela,
        total: total,
        observacoes: formData.observacoes,
        data_salvamento: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from("agendamentos")
        .insert([singleRowData]);

      if (error) {
        toast.error(`Erro ao salvar os dados: ${error.message}`);
      } else {
        toast.success("Dados salvos com sucesso!");
        setDadosTabela([]);
        setFormData({
          dataDoAgendamento: "",
          horaInicial: "",
          horaFinal: "",
          convenio: "",
          agendamento: "",
          profissional: "",
          sala: "",
          valor: "",
          observacoes: "",
          paciente: {},
        });
        setTotal(0);

        // Adicionando evento ao calendário
        setEvents((prevEvents) => [
          ...prevEvents,
          {
            event_id: data[0].id, // ou algum identificador único
            title: `${formData.agendamento} - ${formData.profissional}`,
            start: new Date(
              `${formData.dataDoAgendamento}T${formData.horaInicial}`
            ),
            end: new Date(
              `${formData.dataDoAgendamento}T${formData.horaFinal}`
            ),
            color: "#FF0000", // ou outra cor que você preferir
            textColor: "#FFFFFF", // ou outra cor que você preferir
            profissional: formData.profissional,
            procedimento: formData.agendamento,
          },
        ]);
      }
    } catch (error) {
      toast.error(`Ocorreu um erro inesperado: ${error.message}`);
    }
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "customWidth"}>
      <FormContainer>
        <FormGroup>
          <Label>Paciente</Label>
          <StyledAutocomplete
            options={pacientes}
            getOptionLabel={(option) => `${option.nome} - CPF: ${option.cpf}`}
            sx={{ width: "30vw" }}
            onChange={handleAutocompleteChangePaciente}
            value={pacientes.find(
              (paciente) =>
                paciente.nome === formData.paciente?.nome &&
                paciente.cpf === formData.paciente?.cpf
            )}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </FormGroup>
        <DivSeparator>
          <DivFlex>
            <Label>Data do agendamento:</Label>
            <Input
              type="date"
              customWidth="7.71vw"
              name="dataDoAgendamento"
              value={formData.dataDoAgendamento}
              onChange={handleChange}
            />
            <Label>Horário de agendamento:</Label>
            <FormGroup>
              <LabelHorario>Hora inicial</LabelHorario>
              <Input
                type="time"
                customWidth="96px"
                name="horaInicial"
                value={formData.horaInicial}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <LabelHorario>Hora final</LabelHorario>
              <Input
                type="time"
                customWidth="96px"
                name="horaFinal"
                value={formData.horaFinal}
                onChange={handleChange}
              />
            </FormGroup>
          </DivFlex>
        </DivSeparator>
        <DivFlex>
          <FormGroup>
            <Select
              name="convenio"
              value={formData.convenio}
              onChange={handleChange}
            >
              <option value="" disabled>
                Convênio
              </option>
              <option value="Particular">Particular</option>
            </Select>
          </FormGroup>
        </DivFlex>
        <Label>
          <DivFlex>
            Agendamento
            <TextLabelEspecial>
              (consultas, exames e procedimentos)
            </TextLabelEspecial>
          </DivFlex>
        </Label>
        <StyledAutocomplete
          options={configAgendamentos}
          getOptionLabel={(option) => option.nome}
          sx={{ width: "22vw" }}
          onChange={handleAutocompleteChange}
          value={configAgendamentos.find(
            (agendamento) => agendamento.nome === formData.agendamento
          )}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
        <DivControlsSala>
          <DivFlex>
            <StyledAutocomplete
              options={profissionais}
              getOptionLabel={(option) => option.nomeCompleto}
              sx={{ width: "22vw" }}
              onChange={(event, value) => {
                setFormData((prevData) => ({
                  ...prevData,
                  profissional: value?.nomeCompleto || "",
                }));
              }}
              value={profissionais.find(
                (profissional) =>
                  profissional.nomeCompleto === formData.profissional
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Profissional"
                  variant="outlined"
                />
              )}
            />
            <Select name="sala" value={formData.sala} onChange={handleChange}>
              <option value="">Selecionar sala</option>
              {salas.map((sala) => (
                <option key={sala.id} value={sala.nome}>
                  {sala.nome}
                </option>
              ))}
            </Select>
          </DivFlex>

          <ButtonSave onClick={handleAdicionar}>
            <PlusCircle size={20} />
            Adicionar
          </ButtonSave>
        </DivControlsSala>
        <DivInfosSala>
          <TabelaSalaAgendamento
            dados={dadosTabela}
            setDados={setDadosTabela}
          />
        </DivInfosSala>
        <DivTotal>
          <DivFlex2>
            <Label>TOTAL</Label>
            <DivInfoTotal>R$ {total.toFixed(2)}</DivInfoTotal>
          </DivFlex2>
        </DivTotal>
        <Label>Observações sobre o agendamento:</Label>
        <TextAreaInput
          customWidth="50vw"
          name="observacoes"
          value={formData.observacoes}
          onChange={handleChange}
        />
        <DivTotal>
          <ButtonSave onClick={handleSaveAll}>Salvar</ButtonSave>
        </DivTotal>
      </FormContainer>
    </StyleSheetManager>
  );
};

export default FormAgendamentModal;
