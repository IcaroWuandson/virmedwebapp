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
  font-size: 1.1rem;
`;

export const LabelCustom = styled.label`
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
  font-size: 1.5rem;
  
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;

export const TextArea = styled.textarea`
  width: 18.69vw;
  height: 14.82vh;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  border: none;
  border-radius: 5px;
`;

export const TextAreaCpf = styled.textarea`
  width: 15.51vw;
  height: 6.12vh;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  border: none;
  border-radius: 5px;
`;

export const DivIdent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DivNomes = styled.div`
  flex-direction: column;
`;

export const DivResponsavel = styled.div`
  width: 18.7vw;
  height: 39.51vh;
  border-radius: 5px;
  border: 1px solid ${colors.input};
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

export const TextResponsavel = styled.p`
  font-weight: 600;
  color: "#334155";
  font-size: 16px;
  line-height: 36.4px;
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

export const DivCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DivAvatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const DivInfoAvatar = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

export const DivPatientPriority = styled.div`
  width: 7.36vw;
  height: 1.76vh;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  text-align: start;
  margin-top: 23px;
`;

export const TextDivPatientPriority = styled.p`
  color: ${colors.white};
  background-color: #f97484;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1px;
  text-align: center;
`;

export const TextCod = styled.p`
  font-size: 1rem;
  color: ${colors.gray};
  font-weight: 600;
  margin-right: 10px;
  margin-top: 3px;
`;

export const TextDivAvatar = styled.p`
  font-size: 1.1rem;
  color: ${colors.gray};
  font-weight: 500;
  margin-bottom: 3px;
  margin-right: 13px;
`;

export const SelectAvatar = styled.select`
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
  margin-right: 83px;
  option {
    color: ${colors.third};
    background-color: ${colors.white};
    font-size: 11px;
  }
`;
