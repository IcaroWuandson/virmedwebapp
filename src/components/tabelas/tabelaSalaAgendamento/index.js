import React, { useState } from "react";

import { Trash } from "@phosphor-icons/react";
import {
  TabelaContainer,
  Cabecalho,
  Celula,
  CabecalhoCelula,
  Linha,
} from "./styles";

const TabelaSalaAgendamento = ({ dados, setDados }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);

  const toggleMenu = (index) => {
    setMenuAberto(!menuAberto);
    setLinhaSelecionada(index);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
    setLinhaSelecionada(null);
  };

  const handleDelete = (index) => {
    const newData = dados.filter((_, i) => i !== index);
    setDados(newData);
  };

  return (
    <TabelaContainer>
      <Cabecalho>
        <Linha>
          <CabecalhoCelula width="10%">Convênio</CabecalhoCelula>
          <CabecalhoCelula width="15%">Agendamento</CabecalhoCelula>
          <CabecalhoCelula width="25%">Profissional</CabecalhoCelula>
          <CabecalhoCelula width="15%">Sala</CabecalhoCelula>
          <CabecalhoCelula width="15%">Valor</CabecalhoCelula>
          <CabecalhoCelula width="20%"></CabecalhoCelula>
        </Linha>
      </Cabecalho>
      <tbody>
        {dados.map((item, index) => (
          <Linha key={index}>
            <Celula width="10%">{item.convenio}</Celula>
            <Celula width="15%">{item.agendamento}</Celula>
            <Celula width="25%">{item.profissional}</Celula>
            <Celula width="15%">{item.sala}</Celula>
            <Celula width="15%">{item.valor}</Celula>

            <Celula width="20%">
              <Trash size={22} onClick={() => handleDelete(index)} />
            </Celula>
          </Linha>
        ))}
      </tbody>
    </TabelaContainer>
  );
};

export default TabelaSalaAgendamento;
