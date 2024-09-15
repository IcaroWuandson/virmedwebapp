import React, { useState, useEffect } from "react";
import { PencilSimple } from "@phosphor-icons/react";
import {
  TabelaContainer,
  Cabecalho,
  Linha,
  CabecalhoCelula,
  Celula,
} from "./styles";
import SidebarDireita from "../sidebarTabela";

const TabelaContoleOrcamento = ({ dados, onValorTotalChange }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [data, setData] = useState(dados);

  const calcularValorFinal = (valor, desconto, acrescimo) => {
    let valorAposDesconto = valor;

    if (desconto.tipo === "R$") {
      valorAposDesconto -= desconto.valor;
    } else if (desconto.tipo === "%") {
      valorAposDesconto -= (valor * desconto.valor) / 100;
    }

    let valorFinalCalculado = valorAposDesconto;
    if (acrescimo.tipo === "R$") {
      valorFinalCalculado += acrescimo.valor;
    } else if (acrescimo.tipo === "%") {
      valorFinalCalculado += (valorAposDesconto * acrescimo.valor) / 100;
    }

    return valorFinalCalculado.toFixed(2);
  };

  const calcularValorTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += parseFloat(item.valorfinal || 0);
    });
    return total;
  };

  useEffect(() => {
    const valorTotal = calcularValorTotal();
    onValorTotalChange(valorTotal);
  }, [data, onValorTotalChange]);

  const toggleSidebar = (dadosItem = null) => {
    setIsSidebarVisible(!isSidebarVisible);
    if (dadosItem) {
      setSelectedData(dadosItem);
    }
  };

  const handleSave = ({ desconto, acrescimo, valorFinal }) => {
    if (desconto && acrescimo && typeof valorFinal !== "undefined") {
      const updatedData = data.map((item) => {
        if (item === selectedData) {
          const novoValorFinal = calcularValorFinal(
            item.valor,
            desconto,
            acrescimo
          );

          return {
            ...item,
            desconto: desconto ?? { tipo: "R$", valor: 0 },
            acrescimo: acrescimo ?? { tipo: "R$", valor: 0 },
            valorfinal: novoValorFinal,
          };
        }
        return item;
      });
      setData(updatedData);
    }
  };

  return (
    <div>
      <TabelaContainer>
        <Cabecalho>
          <Linha>
            <CabecalhoCelula width="10%">Convênio</CabecalhoCelula>
            <CabecalhoCelula width="15%">Agendamento</CabecalhoCelula>
            <CabecalhoCelula width="15%">Valor</CabecalhoCelula>
            <CabecalhoCelula width="10%">Desconto</CabecalhoCelula>
            <CabecalhoCelula width="15%">Acréscimo</CabecalhoCelula>
            <CabecalhoCelula width="15%">Valor Final</CabecalhoCelula>
            <CabecalhoCelula width="5%"></CabecalhoCelula>
          </Linha>
        </Cabecalho>
        <tbody>
          {data.map((item, index) => (
            <Linha key={index}>
              <Celula width="10%">{item.convenio || "---"}</Celula>
              <Celula width="15%">{item.agendamento}</Celula>
              <Celula width="15%">{item.valor}</Celula>
              <Celula width="10%">
                {item.desconto?.tipo &&
                  `${item.desconto.tipo} ${item.desconto.valor}`}
              </Celula>
              <Celula width="15%">
                {item.acrescimo?.tipo &&
                  `${item.acrescimo.tipo} ${item.acrescimo.valor}`}
              </Celula>

              <Celula width="15%">{item.valorfinal}</Celula>
              <Celula width="5%">
                <PencilSimple size={22} onClick={() => toggleSidebar(item)} />
              </Celula>
            </Linha>
          ))}
        </tbody>
      </TabelaContainer>
      {isSidebarVisible && (
        <SidebarDireita
          isVisible={isSidebarVisible}
          onClose={toggleSidebar}
          dados={selectedData || {}}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default TabelaContoleOrcamento;
