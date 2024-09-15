import styled from "styled-components";
import { colors } from "../../../theme";
import { Autocomplete } from "@mui/material";

export const FormContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const TextInfo = styled.p`
  color: ${colors.third};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const LabelHorario = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 1.1rem;
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

export const Select = styled.select`
  width: ${(props) => props.customWidth || "10vw"};
  height: ${(props) => props.customHeight || "4.98vh"};
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
  font-size: 1.5rem;
  font-weight: 500;
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
  height: 4.89vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
  }
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
  font-size: 20px;
  font-weight: 600;
  color: ${colors.third};
  margin: 20px 0;
`;

export const TextLabelEspecial = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: #cbd5e1;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 6px;
  align-items: center;
  text-align: center;
`;

export const DivSeparator = styled.div`
  border-bottom: 1px solid #e2e8f080;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const DivControlsSala = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 73.2vw;
`;

export const DivInfosSala = styled.div`
  justify-content: flex-start;
  align-items: center;
  width: 73.2vw;
  border: 1px solid #cbd5e1;
  margin-top: 20px;
`;

export const DivTotal = styled.div`
  justify-content: flex-end;
  align-items: flex-end;
  width: 73.2vw;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const TextAreaInput = styled.textarea`
  width: ${(props) => props.customWidth || "50vw"};
  min-height: 100px;
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
export const StyledAutocomplete = styled(Autocomplete)`
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  margin-top: 10px;
`;

export const DivInfoTotal = styled.div`
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  min-width: 6vw;
  height: 3vh;
  border-radius: 5px;
  color: black;
  text-align: center;
  justify-content: center;
  font-size: 1.6rem;
`;

export const DivFlex2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;
`;

export const DivClose = styled.div`
  width: 100%;

  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
`;
