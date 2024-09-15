import React from "react";
import {
  ButtonEdit,
  ButtonSave,
  DivButtonsSave,
  DivColumn,
  DivFlex,
  DivFlexAvatar,
  FormContainer,
  FormDivFlex,
  FormGroup,
  Input,
  Label,
  LabelCustom,
  Select,
  TextInfo,
} from "./styles";
import Avatar from "../../avatar";

const ConfigColaborador = () => {
  return (
    <FormContainer>
      <TextInfo>Cadastro do Colaborador</TextInfo>
      <DivFlexAvatar>
        <Avatar />

        <Select customWidth="5vw">
          <option value="">Foto</option>
          <option value="Adicionar imagem">Adicionar imagem</option>
          <option value="Capturar imagem">Capturar imagem</option>
        </Select>
      </DivFlexAvatar>
      <FormDivFlex>
        <DivColumn>
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
              <Input customWidth="10vw" />
            </FormGroup>
            <FormGroup>
              <Label>Data de Nascimento:</Label>
              <Input customWidth="9vw" />
            </FormGroup>
          </DivFlex>

          <DivFlex>
            <FormGroup>
              <Label>Cônjugue:</Label>
              <Input customWidth="15vw" />
            </FormGroup>
            <FormGroup>
              <Label>Filhos:</Label>
              <Input customWidth="15vw" />
            </FormGroup>
          </DivFlex>

          <DivFlex>
            <FormGroup>
              <Label>Tipo sanguíneo:</Label>
              <Select customWidth="7vw">
                <option value="">Selecione</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Alergia:</Label>
              <Input customWidth="15vw" />
            </FormGroup>
          </DivFlex>

          <DivFlex>
            <FormGroup>
              <LabelCustom>Data de admissão</LabelCustom>
              <Input customWidth="9vw" />
            </FormGroup>
            <FormGroup>
              <LabelCustom>Departamento</LabelCustom>
              <Select customWidth="15vw">
                <option value="">Selecione</option>
              </Select>
            </FormGroup>
          </DivFlex>
        </DivColumn>

        <DivColumn>
          <LabelCustom>Endereço</LabelCustom>
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

          <LabelCustom>Contato:</LabelCustom>
          <DivFlex>
            <FormGroup>
              <Label>Contato 01:</Label>
              <Input customWidth="10vw" />
            </FormGroup>
            <FormGroup>
              <Label>Contato 02:</Label>
              <Input customWidth="10vw" />
            </FormGroup>
            <FormGroup>
              <Label>Email corporativo:</Label>
              <Input customWidth="15vw" />
            </FormGroup>
            <FormGroup>
              <Label>Ramal:</Label>
              <Input customWidth="5vw" />
            </FormGroup>
          </DivFlex>
        </DivColumn>
      </FormDivFlex>

      <DivButtonsSave>
        <ButtonEdit>Editar</ButtonEdit>
        <ButtonSave>Salvar</ButtonSave>
        
      </DivButtonsSave>
    </FormContainer>
  );
};

export default ConfigColaborador;
