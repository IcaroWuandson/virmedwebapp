import React from "react";
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

import ConfigClinica from "../../components/formsConfigs/clinicas";
import ConfigColaborador from "../../components/formsConfigs/colaborador";
import ConfigMedicos from "../../components/formsConfigs/medicos";

const Configs = () => {
  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <Tabs>
          <DivTabs>
            <TabList>
              <CustomTab>
                <TextTab>Clínica</TextTab>
              </CustomTab>
              <CustomTab>
                <TextTab>Colaborador</TextTab>
              </CustomTab>
              <CustomTab>
                <TextTab>Médico</TextTab>
              </CustomTab>
              <CustomTab>
                <TextTab>Prestador de serviço</TextTab>
              </CustomTab>
              <CustomTab>
                <TextTab>Procedimento</TextTab>
              </CustomTab>
            </TabList>
          </DivTabs>

          <TabPanels>
            <CustomTabPanel>
              <ConfigClinica />
            </CustomTabPanel>
            <CustomTabPanel>
              <ConfigColaborador />
            </CustomTabPanel>
            <CustomTabPanel>
              <ConfigMedicos />
            </CustomTabPanel>
          </TabPanels>
        </Tabs>
      </ContentWrapper>
    </Container>
  );
};

export default Configs;
