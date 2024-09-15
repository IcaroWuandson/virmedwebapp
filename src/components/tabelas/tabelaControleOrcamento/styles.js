import styled from "styled-components";

import { colors } from "../../../theme";

export const TabelaContainer = styled.table`
  width: 100%;
  min-height: auto;
  border-collapse: collapse;
  justify-content: flex-start;
`;

export const Cabecalho = styled.thead`
  background-color: #f2f2f2;
  height: 2.55vh;
  justify-content: flex-start;
  align-items: center;
`;

export const CabecalhoCelula = styled.th`
  padding: 10px;
  text-align: center;
  font-size: 12px;
  color: ${colors.third};
  font-weight: 600;
  height: 2.55vh;
  ${(props) => props.width && `width: ${props.width};`}

  &:hover {
    color: ${colors.black};
  }
`;

export const Linha = styled.tr`
  height: 2.55vh;
  text-align: center;
  font-size: 12px;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const Celula = styled.td`
  height: 2.55vh;
  vertical-align: middle;
  ${(props) => props.width && `width: ${props.width};`}
  font-size: 12px;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const TextMenu = styled.p`
  font-size: 1rem;
  margin-bottom: 0.1rem;
  margin-left: 0.2rem;
`;
