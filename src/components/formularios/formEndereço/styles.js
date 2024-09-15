import styled from "styled-components";
import { colors } from "../../../theme";

export const FormContainer = styled.div`
  width: 80vw;
  padding: 10px;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 13px;
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
  border-radius: 5px;
  font-size: 13px;
`;

export const Select = styled.select`
  width: ${(props) => props.customWidth || "100%"};
  height: 2.97vh;
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

export const CheckboxLabel = styled.label`
  display: flex;
  margin-bottom: 5px;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;

export const DivIdent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DivButtons = styled.div`
  flex-direction: row;
  display: flex;
  gap: 5px;
  margin-top: 40px;
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
  cursor: pointer;
`;

export const DivCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TextLabel = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.third};
  margin: 20px 0;
`;

export const TextName = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${colors.gray};
`;
