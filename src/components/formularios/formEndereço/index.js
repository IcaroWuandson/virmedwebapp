import React from "react";
import { StyleSheetManager } from "styled-components";
import {
  FormContainer,
  FormGroup,
  Label,
  DivIdent,
  Input,
  Select,
  TextLabel,
  TextName,
} from "./styles";

const EndereçoForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const phoneMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1)$2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(\d{4})(\d)/, "$1$2");
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "customWidth"}>
      <FormContainer>
        <TextName>Nome do paciente: {formData.nome}</TextName>
        <TextLabel>Endereço</TextLabel>
        <DivIdent>
          <FormGroup>
            <Label>Logradouro:</Label>
            <Input
              type="text"
              name="logadouro"
              value={formData.logadouro}
              onChange={handleChange}
              customWidth="21.87vw"
            />
          </FormGroup>

          <FormGroup>
            <Label>N°</Label>
            <Input
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              customWidth="3.22vw"
            />
          </FormGroup>

          <FormGroup>
            <Label>Complemento:</Label>
            <Input
              type="text"
              name="complemento"
              value={formData.complemento}
              onChange={handleChange}
              customWidth="13.17vw"
            />
          </FormGroup>
        </DivIdent>

        <DivIdent>
          <FormGroup>
            <Label>Bairro:</Label>
            <Input
              type="text"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
              customWidth="9.375vw"
            />
          </FormGroup>

          <FormGroup>
            <Label>Cep:</Label>
            <Input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              customWidth="8.55vw"
            />
          </FormGroup>

          <FormGroup>
            <Label>Cidade:</Label>
            <Input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              customWidth="8.55vw"
            />
          </FormGroup>

          <FormGroup>
            <Label>Estado:</Label>
            <Select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              customWidth="10.15vw"
            >
              <option value="">Selecione</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </Select>
          </FormGroup>
        </DivIdent>
        <TextLabel>Contato</TextLabel>

        <DivIdent>
          <FormGroup>
            <Label>Telefone 01:</Label>
            <Input
              type="text"
              name="telefone1"
              value={formData.telefone1}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "telefone1",
                    value: phoneMask(e.target.value),
                  },
                })
              }
              customWidth="13.18vw"
            />
          </FormGroup>

          <FormGroup>
            <Label>Telefone 02:</Label>
            <Input
              type="text"
              name="telefone2"
              value={formData.telefone2}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "telefone2",
                    value: phoneMask(e.target.value),
                  },
                })
              }
              customWidth="13.18vw"
            />
          </FormGroup>

          <FormGroup>
            <Label>WhatsApp:</Label>
            <Input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "whatsapp",
                    value: phoneMask(e.target.value),
                  },
                })
              }
              customWidth="13.18vw"
            />
          </FormGroup>
        </DivIdent>

        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            customWidth="13.18vw"
          />
        </FormGroup>
      </FormContainer>
    </StyleSheetManager>
  );
};

export default EndereçoForm;
