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
  TextInfo,
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormAgendamento = ({ pacienteData }) => {
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
      observacoes: "",
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
      const singleRowData = {
        dataDoAgendamento: formData.dataDoAgendamento,
        horaInicial: formData.horaInicial,
        horaFinal: formData.horaFinal,
        paciente_id: pacienteData.id,
        nomePaciente: pacienteData.nome,
        cpfPaciente: pacienteData.cpf,
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
      }
    } catch (error) {
      toast.error(`Ocorreu um erro inesperado: ${error.message}`);
    }
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "customWidth"}>
      <FormContainer>
        <TextInfo>{pacienteData.nome}</TextInfo>
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
            <Select
              customWidth="22vw"
              name="profissional"
              value={formData.profissional}
              onChange={handleChange}
            >
              <option value="">Selecione o profissional</option>
              {profissionais.map((profissional) => (
                <option key={profissional.id} value={profissional.nomeCompleto}>
                  {profissional.nomeCompleto}
                </option>
              ))}
            </Select>
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

export default FormAgendamento;
