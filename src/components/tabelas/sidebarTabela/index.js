import React, { useState, useEffect } from "react";
import { XCircle } from "@phosphor-icons/react";
import {
  Select,
  SidebarContainer,
  ButtonClose,
  TextHeader,
  Input,
  TextInfo,
  DivColmun,
  DivControls,
  DivFlex,
  Label,
  DivValorFinal,
  TextFinal,
  ButtonSave,
  DivButtomClose,
  ButtonEdit,
  DivButtons,
} from "./styles";

const SidebarDireita = ({ isVisible, onClose, dados = [], onSave }) => {
  const [valor, setValor] = useState(dados.valor || 0);
  const [desconto, setDesconto] = useState(
    dados.desconto || { tipo: "R$", valor: 0 }
  );
  const [acrescimo, setAcrescimo] = useState(
    dados.acrescimo || { tipo: "R$", valor: 0 }
  );
  const [valorFinal, setValorFinal] = useState(valor);

  const calcularValorFinal = () => {
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

    setValorFinal(valorFinalCalculado.toFixed(2));
  };

  useEffect(() => {
    calcularValorFinal();
  }, [valor, desconto, acrescimo]);

  const handleSave = () => {
    if (desconto && acrescimo) {
      onSave({
        desconto,
        acrescimo,
        valorFinal,
      });
      onClose();
    }
  };

  return (
    <SidebarContainer isVisible={isVisible}>
      <DivButtomClose>
        <ButtonClose onClick={onClose}>
          <XCircle size={25} />
        </ButtonClose>
      </DivButtomClose>

      <>
        <TextHeader>{dados.agendamento}</TextHeader>
        <TextInfo>Descontos e acréscimos</TextInfo>
      </>

      <DivControls>
        <TextInfo>Adicionar desconto</TextInfo>
        <DivFlex>
          <DivColmun>
            <Label>Valor:</Label>
            <Input value={valor} readOnly />
          </DivColmun>

          <DivColmun>
            <Label>Desconto:</Label>
            <DivFlex>
              <Input
                type="number"
                value={desconto.valor}
                min="0"
                onChange={(e) =>
                  setDesconto({
                    ...desconto,
                    valor: parseFloat(e.target.value),
                  })
                }
              />
              <Select
                customWidth="3vw"
                value={desconto.tipo}
                onChange={(e) =>
                  setDesconto({ ...desconto, tipo: e.target.value })
                }
              >
                <option>R$</option>
                <option>%</option>
              </Select>
            </DivFlex>
          </DivColmun>

          <DivColmun>
            <Label>Valor após desconto:</Label>
            <Input readOnly value={valorFinal} />
          </DivColmun>
        </DivFlex>
      </DivControls>

      <DivControls>
        <TextInfo>Adicionar acréscimo</TextInfo>
        <DivFlex>
          <DivColmun>
            <Label>Valor:</Label>
            <Input value={valor} readOnly />
          </DivColmun>

          <DivColmun>
            <Label>Acréscimo:</Label>
            <DivFlex>
              <Input
                type="number"
                min="0"
                value={acrescimo.valor}
                onChange={(e) =>
                  setAcrescimo({
                    ...acrescimo,
                    valor: parseFloat(e.target.value),
                  })
                }
              />
              <Select
                customWidth="3vw"
                value={acrescimo.tipo}
                onChange={(e) =>
                  setAcrescimo({ ...acrescimo, tipo: e.target.value })
                }
              >
                <option>R$</option>
                <option>%</option>
              </Select>
            </DivFlex>
          </DivColmun>

          <DivColmun>
            <Label>Valor após acréscimo:</Label>
            <Input readOnly value={valorFinal} />
          </DivColmun>
        </DivFlex>
      </DivControls>

      <DivValorFinal>
        <TextFinal>VALOR FINAL</TextFinal>
        <Input readOnly value={valorFinal} />
      </DivValorFinal>

      <DivButtons>
        <ButtonEdit onClick={onClose}>Cancelar</ButtonEdit>
        <ButtonSave onClick={handleSave}>Salvar</ButtonSave>
      </DivButtons>
    </SidebarContainer>
  );
};

export default SidebarDireita;
