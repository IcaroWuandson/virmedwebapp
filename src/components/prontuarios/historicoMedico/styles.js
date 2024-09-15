import styled from "styled-components";
import { colors } from "../../../theme";

export const StyledAccordionItem = styled.div`
  background-color: rgba(203, 213, 225, 0.2);
  border-radius: 4px;
  margin-bottom: 8px;
  width: 10vw;
`;

export const StyledAccordionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #cbd5e1;
  border: none;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    background-color: ${colors.third};
    color: white;
  }
`;

export const StyledAccordionPanel = styled.div`
  padding: 8px;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const TitleButtons = styled.div`
  font-size: 1.4rem;
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 44px;

  align-items: center;
`;

export const DivTextInfos = styled.div`
  gap: 5px;
`;

export const TextInfos = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 3px;
  display: flex;
  flex-direction: row;
`;

export const DivInfoAtendimento = styled.div`
  margin-bottom: 10px;
`;

export const TextHeaderAtendimento = styled.p`
  color: ${colors.third};
  font-size: 1.6rem;
`;

export const Input = styled.input`
  width: ${(props) => props.customWidth || "100%"};
  height: 2.97vh;
  padding: 5px;
  box-sizing: border-box;
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  border: none;
  border-radius: 3px;
  font-size: 1.3rem;
`;

export const DivContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
  margin-right: 2vw;
`;

export const ButtonSave = styled.button`
  height: 3.5vh;
  width: 10vw;
  background-color: ${colors.third};
  color: ${colors.white};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${colors.primary};
  }
`;

export const ButtonSaveExit = styled.button`
  height: 3.5vh;
  width: 10vw;
  background-color: ${colors.input};
  color: ${colors.black};
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${colors.gray};
    color: ${colors.white};
  }
`;

export const TextButton = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const DivContainerTextsEditors = styled.div`
  gap: 20px;
  margin-bottom: 50px;
`;

export const DivContainerModelos = styled.div`
  gap: 25px;
  background-color: rgba(203, 213, 225, 0.4);
  height: 62vh;
  border-radius: 5px;
  width: 13vw;
`;

export const DivBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85vw;
`;

export const DivModelos = styled.div`
  max-width: 45vw;
  padding: 10px;
  overflow-y: auto;
  max-height: 61vh;
`;

export const ButtonSaveModel = styled.button`
  height: 3vh;
  width: auto;
  background-color: ${colors.input};
  color: ${colors.gray};
  border: none;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-top: 20px;

  &:hover {
    background-color: ${colors.gray};
    color: ${colors.white};
  }
`;

export const DivFlex2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
`;

export const TimeConsulte = styled.div`
  border: 1px solid ${colors.third};
  border-radius: 10px;
  padding: 5px;
  font-size: 1.5rem;
`;

export const DivFlex3 = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  height: auto;
  margin-top: 5px;
  gap: 5px;
`;

export const DivDataPoint = styled.div`
  justify-content: flex-start;
  align-items: center;
  font-size: 1.4rem;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`;

export const DivQueixa = styled.div`
  justify-content: flex-start;
  align-items: center;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`;

export const DivPointer = styled.div`
  padding: 10px;
  background-color: ${colors.primary};
  border-radius: 50px;
  margin: 5px;
`;
