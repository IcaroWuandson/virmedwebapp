import React from "react";
import {
  ButtonEdit,
  ButtonSave,
  DivButtonsSave,
  DivFlex,
  DivFlexAvatar,
  FormContainer,
  FormGroup,
  Input,
  Label,
  Select,
  TextInfo,
} from "./styles";
import Avatar from "../../avatar";

const ConfigMedicos = () => {
  return (
    <FormContainer>
      <TextInfo>Cadastro médico</TextInfo>

      <DivFlexAvatar>
        <Avatar />
        <Select customWidth="5vw">
          <option value="">Foto</option>
          <option value="Adicionar imagem">Adicionar imagem</option>
          <option value="Capturar imagem">Capturar imagem</option>
        </Select>
      </DivFlexAvatar>

      <DivFlex>
        <FormGroup>
          <Label>Nome completo*</Label>
          <Input customWidth="30vw" />
        </FormGroup>
      </DivFlex>

      <DivFlex>
        <FormGroup>
          <Label>CPF:</Label>
          <Input customWidth="12vw" />
        </FormGroup>
        <FormGroup>
          <Label>RG:</Label>
          <Input customWidth="12vw" />
        </FormGroup>
        <FormGroup>
          <Label>CNPJ:</Label>
          <Input customWidth="12vw" />
        </FormGroup>
      </DivFlex>

      <DivFlex>
        <FormGroup>
          <Label>Data de nascimento:</Label>
          <Input customWidth="10vw" />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input customWidth="18vw" />
        </FormGroup>
        <FormGroup>
          <Label>Telefone:</Label>
          <Input customWidth="10vw" />
        </FormGroup>
      </DivFlex>

      <DivFlex>
        <FormGroup>
          <Label>CRM:</Label>
          <Input customWidth="10vw" />
        </FormGroup>
        <FormGroup>
          <Label>Especialidade:</Label>
          <Input customWidth="18vw" />
        </FormGroup>
        <FormGroup>
          <Label>Procedimentos:</Label>
          <Input customWidth="18vw" />
        </FormGroup>
      </DivFlex>

      <DivButtonsSave>
        <ButtonEdit>Editar</ButtonEdit>
        <ButtonSave>Salvar</ButtonSave>
      </DivButtonsSave>
    </FormContainer>
  );
};

export default ConfigMedicos;
