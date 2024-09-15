import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { Tabs, TabList, TabPanels } from "@chakra-ui/react";
import {
  Container,
  ContentWrapper,
  CustomTab,
  CustomTabPanel,
  DivTabs,
  TextTab,
} from "./styles";
import ProntuarioPadrão from "../../components/prontuarios/padrão";

import { supabase } from "../../services/supabase";

const Prontuario = () => {
  const location = useLocation();
  const pacienteId = location.pathname.split("/").pop();
  const { agendamento, todosOsDados } = location.state || {};
  const [paciente, setPaciente] = useState(null);

  useEffect(() => {
    const fetchPaciente = async () => {
      try {
        const { data, error } = await supabase
          .from("pacientes")
          .select("*")
          .eq("id", pacienteId)
          .single();

        if (error) {
          throw error;
        }

        setPaciente(data);
      } catch (error) {
        console.error("Erro ao buscar dados do paciente:", error.message);
      }
    };

    fetchPaciente();
  }, [pacienteId]);

  console.log(agendamento, todosOsDados);

  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <Tabs>
          <DivTabs>
            <TabList>
              <CustomTab>
                <TextTab>Padrão</TextTab>
              </CustomTab>
              <CustomTab>
                <TextTab>Pré-Natal</TextTab>
              </CustomTab>
              <CustomTab>
                <TextTab>Ultrassonografia</TextTab>
              </CustomTab>
            </TabList>
          </DivTabs>

          <TabPanels>
            <CustomTabPanel>
              {paciente && (
                <ProntuarioPadrão paciente={{ paciente, agendamento }} />
              )}
            </CustomTabPanel>
          </TabPanels>
        </Tabs>
      </ContentWrapper>
    </Container>
  );
};

export default Prontuario;
