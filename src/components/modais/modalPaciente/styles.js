import styled from "styled-components";
import { colors } from "../../../theme";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ModalContent = styled.div`
  background-color: white;
  position: relative;
  width: auto;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  margin-top: 10px;
  width: auto;
  height: auto;
  text-align: center;
`;

export const TextInfos = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.third};
`;

export const TextInfosInside = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.black};
`;

export const TextHeader = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.black};
`;

export const Select = styled.select`
  width: ${(props) => props.customWidth || "13vw"};
  height: ${(props) => props.customHeight || "3vh"};
  box-sizing: border-box;
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  border: none;
  border-radius: 5px;

  option {
    color: ${colors.third};
    background-color: ${colors.white};
    font-size: 11px;
  }
`;

export const DivSelect = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  text-align: center;
`;

export const ButtonSave = styled.button`
  min-width: 5vw;
  height: 3 vh;
  background-color: ${colors.third};
  border: none;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: ${colors.primary};
  }
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
