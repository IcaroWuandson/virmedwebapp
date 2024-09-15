import React from "react";
import {
  DivFlex,
  FormContainer,
  FormGroup,
  Input,
  Label,
  Select,
  DivControlsSala,
  ButtonSave,
  DivInfosSala,
  DivTotal,
  CustomP,
  DivColumn,
  CustomSelect,
} from "./styles";
import TabelaContoleOrcamento from "../../tabelas/tabelaControleOrcamento";
const FormControleOrcamentario = () => {
  const dadosExemplo = [
    {
      convenio: "Particular",
      agendamento: "Abdomen Total",
      valor: "R$ 160,00",
      desconto: "R$ 20,00",
      acrescimo: "-",
      valorfinal: "R$ 140,00",
    },
    {
      convenio: "Particular",
      agendamento: "Abdomen Total",
      valor: "R$ 160,00",
      desconto: "R$ 20,00",
      acrescimo: "-",
      valorfinal: "R$ 140,00",
    },
    {
      convenio: "Particular",
      agendamento: "Abdomen Total",
      valor: "R$ 160,00",
      desconto: "R$ 20,00",
      acrescimo: "-",
      valorfinal: "R$ 140,00",
    },
    {
      convenio: "Particular",
      agendamento: "Abdomen Total",
      valor: "R$ 160,00",
      desconto: "R$ 20,00",
      acrescimo: "-",
      valorfinal: "R$ 140,00",
    },
  ];
  return (
    <FormContainer>
      <DivControlsSala>
        <CustomP>
          Selecionar todos os itens para aplicar desconto/acrescimo
        </CustomP>
        <ButtonSave>Aplicar</ButtonSave>
      </DivControlsSala>
      <DivInfosSala>
        <TabelaContoleOrcamento dados={dadosExemplo} />
      </DivInfosSala>

      <DivTotal>
        <DivFlex>
          <Label>VALOR TOTAL</Label>
          <Input customWidth="5.26vw" />
        </DivFlex>
      </DivTotal>

      <DivFlex>
        <FormGroup>
          <Label>Forma de pagamento</Label>
          <DivColumn>
            <Select customWidth="12vw">
              <option value="">Selecione</option>
            </Select>
            <Select customWidth="12vw">
              <option value="">Selecione</option>
            </Select>
          </DivColumn>
        </FormGroup>

        <FormGroup>
          <Label>Valor</Label>
          <DivColumn>
            <Input customWidth="12vw" />
            <Input customWidth="12vw" />
          </DivColumn>
        </FormGroup>

        <DivColumn>
          <ButtonSave>Concluir</ButtonSave>
        </DivColumn>

        <DivColumn>
          <CustomSelect>
            <option value="">Mais ações</option>
          </CustomSelect>
        </DivColumn>
      </DivFlex>
    </FormContainer>
  );
};

export default FormControleOrcamentario;
