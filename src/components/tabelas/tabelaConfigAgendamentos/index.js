import React, { useState } from "react";
import { Trash } from "@phosphor-icons/react";
import {
  TabelaContainer,
  Cabecalho,
  Celula,
  CabecalhoCelula,
  Linha,
} from "./styles";
import { supabase } from "../../../services/supabase";
import { toast } from "react-toastify";

const TabelaConfigAgendamentos = ({ dados, setDados }) => {
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

  const handleDelete = async (index) => {
    try {
      const item = dados[index];

      const { data, error } = await supabase
        .from("configAgendamentos")
        .delete()
        .eq("id", item.id);

      if (error) {
        throw error;
      }

      const newData = dados.filter((_, i) => i !== index);
      setDados(newData);

      toast.success("Registro excluído com sucesso");
    } catch (error) {
      console.error("Erro ao excluir o registro:", error.message);

      toast.error("Erro ao excluir o registro");
    }
  };

  return (
    <TabelaContainer>
      <Cabecalho>
        <Linha>
          <CabecalhoCelula width="30%">Agendamento</CabecalhoCelula>

          <CabecalhoCelula width="35%">Valor</CabecalhoCelula>
          <CabecalhoCelula width="30%"></CabecalhoCelula>
        </Linha>
      </Cabecalho>
      <tbody>
        {dados.map((item, index) => (
          <Linha key={index}>
            <Celula width="30%">{item.nome}</Celula>
            <Celula width="35%"> R$ {item.valor}</Celula>

            <Celula width="30%">
              <Trash size={22} onClick={() => handleDelete(index)} />
            </Celula>
          </Linha>
        ))}
      </tbody>
    </TabelaContainer>
  );
};

export default TabelaConfigAgendamentos;
