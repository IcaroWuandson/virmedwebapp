import styled from "styled-components";
import { Tab, TabPanel } from "@chakra-ui/react";

import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 11.05vw;
  position: absolute;
`;

export const CustomTab = styled(Tab)`
  background-color: ${colors.white};
  color: ${colors.gray};
  border: none;
  position: relative;
  margin-top: 3.89vh;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.third};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const CustomTabPanel = styled(TabPanel)`
  padding: 10px;
`;

export const TextTab = styled.p`
  font-weight: 500;
  font-size: 16px;

  &:hover {
    color: ${colors.third};
  }
`;

export const DivTabs = styled.div`
  border-bottom: 2px solid #e2e8f0;
  padding: 2px;
  width: 80.44vw;
  
`;

export const DivButtons = styled.div`
  flex-direction: row;
  display: flex;
  gap: 5px;
`;

export const ButtonSave = styled.button`
  background-color: ${colors.third};
  color: ${colors.white};
  border-radius: 5px;
  border: none;
  width: 9.12vw;
  height: 3.89vh;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
`;

export const ButtonEdit = styled.button`
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  color: "#334155";
  border-radius: 5px;
  border: none;
  width: 9.12vw;
  height: 3.89vh;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
`;
