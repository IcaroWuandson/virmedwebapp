import styled from "styled-components";

import { colors } from "../../../theme";

export const TabelaContainer = styled.table`
  width: 100%;
  min-height: 2.55vh;
  border-collapse: collapse;
  margin-top: 60px;
  justify-content: flex-start;
`;

export const Cabecalho = styled.thead`
  background-color: #f2f2f2;
  min-height: 2.55vh;
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
  min-height: 2.55vh;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const Celula = styled.td`
  min-height: 2.55vh;
  padding: 10px;
  vertical-align: middle;
  ${(props) => props.width && `width: ${props.width};`}
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

export const MenuSuspenso = styled.div`
  position: relative;
  display: inline-block;
  border: solid 1px ${colors.input};
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonHistory = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  color: none;
`;

export const TextButtonHistory = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: 1px solid;
  color: ${colors.third};
  &:hover{
    color: ${colors.primary};
  }
`;

export const TextButtonAtender = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const OpcaoMenu = styled.div`
  cursor: pointer;
  text-align: start;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-top: 0.5rem;
  &:hover {
    background-color: #f7f7f7;
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
  min-width: 11.11vw;
  height: auto;
  background-color: #cbd5e1;
  border-radius: 5px;
`;

export const TextMenu = styled.p`
  font-size: 1rem;
  margin-bottom: 0.1rem;
  margin-left: 0.2rem;
`;

export const ButtonAtender = styled.button`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 20px;
  padding: 10px;
  border: none;
  background-color: ${colors.primary};
  color: ${colors.white};

  &:hover{
    background-color: ${colors.third};
    border-radius: 10px;
  }
`;
