import React, { useEffect, useState } from "react";
import {
  ButtonSaveModel,
  DivContainerModelos,
  DivFlex2,
  DivModelos,
  Input,
  TextButton,
  TextInfos,
  DivDataPoint,
  DivPointer,
  DivQueixa,
} from "./styles";

import { supabase } from "../../../services/supabase";

const DivHistoryMed = ({ dados }) => {
  const [prontuarios, setProntuarios] = useState([]);

  useEffect(() => {
    const fetchProntuarios = async () => {
      const { data, error } = await supabase
        .from("prontuario")
        .select("*")
        .eq("pacienteId", dados.id);

      if (error) {
        console.error("Erro ao buscar prontuários:", error);
      } else {
        const consolidatedData = consolidateProntuarios(data);
        setProntuarios(consolidatedData);
      }
    };

    fetchProntuarios();
  }, []);

  const consolidateProntuarios = (data) => {
    return data;
  };

  const formatData = (data) => {
    const date = new Date(data);
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <DivContainerModelos>
      <DivModelos>
        <TextInfos>Histórico médico:</TextInfos>

        {prontuarios.map((prontuario, index) => (
          <div key={index}>
            <DivDataPoint>
              <DivPointer></DivPointer> {formatData(prontuario.created_at)}
            </DivDataPoint>
            <DivQueixa>{prontuario.queixaPrincipal}</DivQueixa>
          </div>
        ))}
      </DivModelos>
    </DivContainerModelos>
  );
};

export default DivHistoryMed;
