import styled from "styled-components";
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

export const DivTable = styled.div`
  margin-top: 20px;
  border: 1px solid;
  width: 80vw;
`;

export const CustomP = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${colors.third};
  border-bottom: 1px solid ${colors.third};
  margin-top: 10vh;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 6px;
  align-items: center;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
  text-align: start;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const CustomSelect = styled.select`
  width: ${(props) => props.customWidth || "11vw"};
  height: ${(props) => props.customHeight || "3.80vh"};
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
export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  min-height: 5vh;
`;

export const Select = styled.select`
  width: ${(props) => props.customWidth || "10vw"};
  height: ${(props) => props.customHeight || "3.89vh"};
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

export const Input = styled.input`
  width: ${(props) => props.customWidth || "100%"};
  height: 3.89vh;
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

export const ButtonSave = styled.button`
  background-color: ${colors.third};
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
  margin-top: 10px;
  cursor: pointer;

  &:hover{
    background-color: ${colors.primary};
  }
`;

export const DivTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

export const TextTotal = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
`;
