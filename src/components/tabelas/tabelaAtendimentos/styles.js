import styled from "styled-components";

import { colors } from "../../../theme";

export const TabelaContainer = styled.table`
  width: 100%;
  height: 31vh;
  border-collapse: collapse;
  margin-top: 60px;
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

export const MenuSuspenso = styled.div`
  position: relative;
  display: inline-block;
  border: solid 1px ${colors.input};
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const OpcaoMenu = styled.div`
  cursor: pointer;
  text-align: start;
  display: flex;
  flex-direction: row;
  padding-left: 0.2rem;
  padding-top: 0.2rem;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const TextMenu = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.1rem;
  margin-left: 0.2rem;
`;

export const ButtonAtender = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-width: 3.6vw;
  height: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${colors.third};
    border-radius: 10px;
  }
`;

export const MenuOpcoes = styled.div.attrs((props) => ({
  style: {
    display: props.aberto ? "block" : "none",
  },
}))`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  top: 100%;
  padding-top: 2px;
  right: 0;
  z-index: 1;
  min-width: 14.3vw;
  height: auto;
  background-color: #cbd5e1;
  border-radius: 5px;
`;
