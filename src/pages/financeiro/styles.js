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

export const DivControls = styled.div`
  background-color: ${colors.input};
  padding: 10px;
  width: 80vw;
  height: 20vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: ${(props) => props.customWidth || "100%"};
  height: 3.97vh;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${colors.white};
  border: none;
  border-radius: 3px;
  font-size: 1.3rem;
`;

export const Select = styled.select`
  width: ${(props) => props.customWidth || "10vw"};
  height: ${(props) => props.customHeight || "3.98vh"};
  box-sizing: border-box;
  background-color: ${colors.white};
  border: none;
  border-radius: 5px;

  option {
    color: ${colors.third};
    background-color: ${colors.white};
    font-size: 11px;
  }
`;

export const Label = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ButtonFilter = styled.button`
  background-color: ${colors.third};
  width: ${(props) => props.customWidth || "100%"};
  height: 3.97vh;
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.primary};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.third};
  font-weight: 600;
  height: 2.55vh;
  ${(props) => props.width && `width: ${props.width};`}
  &:hover {
    color: ${colors.black};
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const TableRow = styled.tr`
  height: 2.55vh;
  text-align: center;
  font-size: 1.2rem;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const DivTable = styled.div`
  margin-top: 20px;
`;

export const Cabecalho = styled.thead`
  background-color: #f2f2f2;
  height: 2.55vh;
  justify-content: flex-start;
  align-items: center;
`;

export const Linha = styled.tr`
  height: 2.55vh;
  text-align: center;
  font-size: 1.2rem;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const ButtonQuitar = styled.button`
  background-color: ${colors.third};
  width: ${(props) => props.customWidth || "100%"};
  height: 2.97vh;
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  min-width: 4vw;
  &:hover {
    background-color: ${colors.primary};
  }
`;
