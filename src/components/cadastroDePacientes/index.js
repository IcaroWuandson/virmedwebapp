import React, { useState } from "react";
import { Tabs, TabList, TabPanels } from "@chakra-ui/react";
import Sidebar from "../sidebar";
import IdentificationForm from "../formularios/formIdentificação";
import EndereçoForm from "../formularios/formEndereço";

import {
  Container,
  ContentWrapper,
  TextTab,
  CustomTab,
  CustomTabPanel,
  DivButtons,
  DivTabs,
  ButtonEdit,
  ButtonSave,
} from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { supabase } from "../../services/supabase";

const CadastroDePacientes = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sexoBiologico: "",
    identidadeGenero: "",
    nomeSocial: "",
    cpf: "",
    image: "",
    semCpf: false,
    nomeSocialCheck: false,
    possuiResponsavel: false,
    pacientePrioritario: false,
    dataNascimento: "",
    observacao: "",
    nomeMae: "",
    nomePai: "",
    responsavel: "",
    cpfResponsavel: "",
    dataNascimentoResponsavel: "",
    logadouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cep: "",
    cidade: "",
    estado: "",
    telefone1: "",
    telefone2: "",
    whatsapp: "",
    email: "",
  });

  const handleSave = async () => {
    if (formData.dataNascimento === "") {
      toast.error("Por favor, preencha o campo de data de nascimento.");
      return;
    }

    try {
      const dataNascimento = new Date(formData.dataNascimento);

      if (isNaN(dataNascimento.getTime())) {
        return;
      }

      const formattedDataNascimento = dataNascimento.toISOString();

      const dataToSave = {
        ...formData,
        dataNascimento: formattedDataNascimento,
      };

      const { data, error } = await supabase
        .from("pacientes")
        .insert([dataToSave]);

      if (error) {
        toast.error("Erro ao salvar os dados: " + error.message);
      } else {
        toast.success("Dados salvos com sucesso!");
      }
    } catch (error) {
      toast.error("Erro ao salvar os dados: " + error.message);
    }
  };

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <Tabs index={currentTab} onChange={(index) => setCurrentTab(index)}>
          <DivTabs>
            <TabList>
              <CustomTab>
                <TextTab>Identificação</TextTab>
              </CustomTab>
              <CustomTab>
                <TextTab>Endereço e contato</TextTab>
              </CustomTab>
            </TabList>
          </DivTabs>

          <TabPanels>
            <CustomTabPanel>
              <IdentificationForm
                formData={formData}
                setFormData={setFormData}
              />
              {currentTab === 0 && (
                <DivButtons>
                  <ButtonSave onClick={() => setCurrentTab(currentTab + 1)}>
                    Próximo
                  </ButtonSave>
                </DivButtons>
              )}
            </CustomTabPanel>
            <CustomTabPanel>
              <EndereçoForm formData={formData} setFormData={setFormData} />
              {currentTab === 1 && (
                <DivButtons>
                  <ButtonSave onClick={handleSave}>Salvar</ButtonSave>
                  <ButtonEdit>Editar informações</ButtonEdit>
                </DivButtons>
              )}
            </CustomTabPanel>
          </TabPanels>
        </Tabs>
      </ContentWrapper>
    </Container>
  );
};

export default CadastroDePacientes;
