import styled from "styled-components";
import { colors } from "../../../theme";

export const FormContainer = styled.div`
  width: 86vw;
  padding: 10px;
`;

export const TextInfo = styled.p`
  color: ${colors.third};
  font-size: 2rem;
  font-weight: 600;
  margin-top: 20px;
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
  height: ${(props) => props.customHeight || "2.98vh"};
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
  width: 53.2vw;
`;

export const DivInfosSala = styled.div`
  justify-content: flex-start;
  align-items: center;
  width: 53.2vw;
  border: 1px solid #cbd5e1;
  margin-top: 20px;
`;

export const DivTotal = styled.div`
  justify-content: flex-end;
  align-items: flex-end;
  width: 53.2vw;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const TextAreaInput = styled.textarea`
  width: ${(props) => props.customWidth || "60vw"};
  min-height: 223px;
  padding: 5px;
  max-width: 80vw;
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

export const DivTable = styled.div`
  width: 60vw;
  margin-top: 30px;
  border: 1px solid;
`;

export const DivFlexAvatar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 6px;
  justify-content: start;
  align-items: center;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelCustom = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${colors.third};
  font-weight: 600;
  font-size: 1.4rem;
`;

export const FormDivFlex = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 30px;
`;

export const DivButtonsSave = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonSave = styled.button`
  background-color: ${colors.third};
  margin-right: 40px;
  color: ${colors.white};
  border-radius: 5px;
  border: none;
  width: 9.12vw;
  height: 3.89vh;
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
  background-color: ${colors.text};
  margin-right: 15px;
  color: ${colors.black};
  border-radius: 5px;
  border: none;
  width: 9.12vw;
  height: 3.89vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;
`;
