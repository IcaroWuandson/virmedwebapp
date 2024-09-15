import React from "react";
import { StyleSheetManager } from "styled-components";
import {
  FormContainer,
  FormGroup,
  Label,
  LabelCustom,
  CheckboxInput,
  CheckboxLabel,
  DivIdent,
  DivNomes,
  DivResponsavel,
  Input,
  Select,
  TextArea,
  TextAreaCpf,
  TextResponsavel,
  DivCheckBox,
  DivAvatar,
  DivInfoAvatar,
  TextDivPatientPriority,
  DivPatientPriority,
  TextDivAvatar,
  SelectAvatar,
} from "./styles";
import Avatar from "../../avatar";

const IdentificationForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const maskedValue = name === "cpf" ? cpfMask(value) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : maskedValue,
    }));
  };

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "customWidth"}>
      <FormContainer>
        <DivAvatar>
          <Avatar />
          <DivInfoAvatar>
            <DivPatientPriority>
              {formData.pacientePrioritario && (
                <TextDivPatientPriority>
                  Paciente prioritário
                </TextDivPatientPriority>
              )}

              <TextDivAvatar>Imagem de perfil</TextDivAvatar>

              <FormGroup>
                <SelectAvatar
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  customWidth="4.01vw"
                >
                  <option value="">Foto</option>
                  <option value="Adicionar imagem">Adicionar imagem</option>
                  <option value="Capturar imagem">Capturar imagem</option>
                </SelectAvatar>
              </FormGroup>
            </DivPatientPriority>
          </DivInfoAvatar>
        </DivAvatar>

        <DivIdent>
          <DivNomes>
            <FormGroup>
              <Label>Nome completo*</Label>
              <Input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                customWidth="21.93vw"
              />
            </FormGroup>
            <DivCheckBox>
              <FormGroup>
                <LabelCustom>
                  Paciente possui nome social?
                  <CheckboxInput
                    type="checkbox"
                    name="nomeSocialCheck"
                    checked={formData.nomeSocialCheck}
                    onChange={handleChange}
                  />
                  Sim
                </LabelCustom>
              </FormGroup>

              <FormGroup>
                <LabelCustom>
                  Paciente prioritário?
                  <CheckboxInput
                    type="checkbox"
                    name="pacientePrioritario"
                    checked={formData.pacientePrioritario}
                    onChange={handleChange}
                  />
                  Sim
                </LabelCustom>
              </FormGroup>
            </DivCheckBox>
            {formData.nomeSocialCheck && (
              <FormGroup>
                <Label>Nome Social</Label>
                <Input
                  type="text"
                  name="nomeSocial"
                  value={formData.nomeSocial}
                  onChange={handleChange}
                  customWidth="21.93vw"
                />
              </FormGroup>
            )}
          </DivNomes>

          <FormGroup>
            <Label>Sexo Biológico</Label>
            <Select
              name="sexoBiologico"
              value={formData.sexoBiologico}
              onChange={handleChange}
              customWidth="9.28vw"
            >
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Identidade de Gênero</Label>
            <Select
              name="identidadeGenero"
              value={formData.identidadeGenero}
              onChange={handleChange}
              customWidth="10.15vw"
            >
              <option value="">Selecione</option>
              <option value="Homem cisgênero">Homem cisgênero</option>
              <option value="Mulher cisgênero">Mulher cisgênero</option>
              <option value="Homem trans">Homem trans</option>
              <option value="Mulher trans">Mulher trans</option>
              <option value="Travestir">Travestir</option>
              <option value="Gênero fluido">Gênero fluido</option>
              <option value="Não binário">Não binário</option>
              <option value="Queer">Queer</option>
              <option value="Opção não listada">Opção não listada</option>
            </Select>
          </FormGroup>
        </DivIdent>
        <FormGroup>
          <Label>CPF</Label>
          <Input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            customWidth="21.93vw"
          />
        </FormGroup>

        <FormGroup>
          <LabelCustom>
            <CheckboxInput
              type="checkbox"
              name="semCpf"
              checked={formData.semCpf}
              onChange={handleChange}
            />
            Não possui CPF
          </LabelCustom>
        </FormGroup>

        {formData.semCpf && (
          <FormGroup>
            <Label>Justificar ausência de CPF:</Label>
            <TextAreaCpf
              type="text"
              name="nomeSocial"
              value={formData.nomeSocial}
              onChange={handleChange}
              customWidth="21.93vw"
            />
          </FormGroup>
        )}

        <FormGroup>
          <Label>Data de Nascimento</Label>
          <Input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            customWidth="9.28vw"
          />
        </FormGroup>

        <FormGroup>
          <Label>Observação sobre o Paciente</Label>
          <TextArea
            name="observacao"
            value={formData.observacao}
            onChange={handleChange}
            customWidth="21.93vw"
          />
        </FormGroup>

        <FormGroup>
          <CheckboxLabel>
            Paciente possui responsável?
            <CheckboxInput
              type="checkbox"
              name="possuiResponsavel"
              checked={formData.possuiResponsavel}
              onChange={handleChange}
            />
            Sim
          </CheckboxLabel>
        </FormGroup>

        {formData.possuiResponsavel && (
          <DivResponsavel>
            <TextResponsavel>Dados familiares</TextResponsavel>
            <FormGroup>
              <Label>Nome da mãe:</Label>
              <Input
                type="text"
                name="nomeMae"
                value={formData.nomeMae}
                onChange={handleChange}
                customWidth="15.11vw"
              />
            </FormGroup>

            <FormGroup>
              <Label>Nome do pai:</Label>
              <Input
                type="text"
                name="nomePai"
                value={formData.nomePai}
                onChange={handleChange}
                customWidth="15.11vw"
              />
            </FormGroup>

            <FormGroup>
              <Label>Responsável:</Label>
              <Input
                type="text"
                name="responsavel"
                value={formData.responsavel}
                onChange={handleChange}
                customWidth="15.11vw"
              />
            </FormGroup>

            <FormGroup>
              <Label>Documento do responsável (CPF)</Label>
              <Input
                type="text"
                name="cpfResponsavel"
                value={formData.cpfResponsavel}
                onChange={handleChange}
                customWidth="15.11vw"
              />
            </FormGroup>

            <FormGroup>
              <Label>Data de nascimento do responsável:</Label>
              <Input
                type="date"
                name="dataNascimentoResponsavel"
                value={formData.dataNascimentoResponsavel}
                onChange={handleChange}
                customWidth="11.27vw"
              />
            </FormGroup>
          </DivResponsavel>
        )}
      </FormContainer>
    </StyleSheetManager>
  );
};

export default IdentificationForm;
