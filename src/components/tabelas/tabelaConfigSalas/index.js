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

const TabelaConfigSalas = ({ dados, setDados }) => {
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
        .from("salas")
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
          <CabecalhoCelula width="60%">Sala</CabecalhoCelula>

          <CabecalhoCelula width="30%"></CabecalhoCelula>
        </Linha>
      </Cabecalho>
      <tbody>
        {dados.map((item, index) => (
          <Linha key={index}>
            <Celula width="60%">{item.nome}</Celula>
           
            <Celula width="30%">
              <Trash size={22} onClick={() => handleDelete(index)} />
            </Celula>
          </Linha>
        ))}
      </tbody>
    </TabelaContainer>
  );
};

export default TabelaConfigSalas;
