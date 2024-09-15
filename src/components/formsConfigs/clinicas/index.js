import React from "react";
import {
  ButtonEdit,
  ButtonSave,
  DivButtonsSave,
  DivFlex,
  FormContainer,
  FormGroup,
  Input,
  Label,
  TextInfo,
} from "./styles";

const ConfigClinica = () => {
  return (
    <FormContainer>
      <TextInfo>Dados Comerciais</TextInfo>

      <DivFlex>
        <FormGroup>
          <Label>Nome Fantasia:</Label>
          <Input customWidth="20vw" />
        </FormGroup>
        <FormGroup>
          <Label>CNPJ/CPF:</Label>
          <Input customWidth="20vw" />
        </FormGroup>
      </DivFlex>
      <DivFlex>
        <FormGroup>
          <Label>Email corporativo:</Label>
          <Input customWidth="20vw" />
        </FormGroup>
        <FormGroup>
          <Label>Telefone para contato:</Label>
          <Input customWidth="20vw" />
        </FormGroup>
      </DivFlex>

      <TextInfo>Endereço</TextInfo>
      <DivFlex>
        <FormGroup>
          <Label>Logradouro:</Label>
          <Input customWidth="25vw" />
        </FormGroup>
        <FormGroup>
          <Label>N°:</Label>
          <Input customWidth="4vw" />
        </FormGroup>
        <FormGroup>
          <Label>Complemento:</Label>
          <Input customWidth="15vw" />
        </FormGroup>
      </DivFlex>
      <DivFlex>
        <FormGroup>
          <Label>Bairro:</Label>
          <Input customWidth="9vw" />
        </FormGroup>
        <FormGroup>
          <Label>CEP:</Label>
          <Input customWidth="9vw" />
        </FormGroup>
        <FormGroup>
          <Label>Cidade:</Label>
          <Input customWidth="9vw" />
        </FormGroup>
        <FormGroup>
          <Label>Estado:</Label>
          <Input customWidth="5vw" />
        </FormGroup>
      </DivFlex>

      <TextInfo>Responsáveis</TextInfo>

      <DivFlex>
        <FormGroup>
          <Label>Responsável 01:</Label>
          <Input customWidth="20vw" />
        </FormGroup>
        <FormGroup>
          <Label>Responsável 02:</Label>
          <Input customWidth="20vw" />
        </FormGroup>
      </DivFlex>

      <TextInfo>Contatos</TextInfo>

      <DivFlex>
        <FormGroup>
          <Label>Contato 01:</Label>
          <Input customWidth="13vw" />
        </FormGroup>
        <FormGroup>
          <Label>Contato 02:</Label>
          <Input customWidth="13vw" />
        </FormGroup>
      </DivFlex>

      <TextInfo>Dados bancários</TextInfo>

      <DivFlex>
        <FormGroup>
          <Label>Títular:</Label>
          <Input customWidth="12vw" />
        </FormGroup>
        <FormGroup>
          <Label>Nº do Cartão:</Label>
          <Input customWidth="15vw" />
        </FormGroup>
      </DivFlex>

      <DivFlex>
        <FormGroup>
          <Label>Data de validade:</Label>
          <Input customWidth="10vw" />
        </FormGroup>
        <FormGroup>
          <Label>CVV:</Label>
          <Input customWidth="5vw" />
        </FormGroup>
      </DivFlex>
      <FormGroup>
        <Label>Endereço de cobrança:</Label>
        <Input customWidth="19vw" />
      </FormGroup>

      <DivButtonsSave>
        <ButtonEdit>Editar</ButtonEdit>
        <ButtonSave>Salvar</ButtonSave>
      </DivButtonsSave>
    </FormContainer>
  );
};

export default ConfigClinica;
