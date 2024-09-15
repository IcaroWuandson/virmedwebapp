import React, { useRef, useState } from "react";
import {
  ButtonSaveModel,
  DivContainerModelos,
  DivFlex2,
  DivModelos,
  Input,
  TextButton,
  TextInfos,
} from "./styles";
import { PlusCircle } from "@phosphor-icons/react";
import EditorModeloDocumento from "../../editorModeloDocumentos";
import { supabase } from "../../../services/supabase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModelDocumentSpace = ({ pacienteDados }) => {
  const [nomeModelo, setNomeModelo] = useState("");
  const editorRef = useRef(null);

  const handleInputChange = (event) => {
    setNomeModelo(event.target.value);
  };

  const saveModel = async (nomeModelo, dadosModelo) => {
    const { data, error } = await supabase
      .from("modelos")
      .insert([{ nome: nomeModelo, dados: dadosModelo }]);

    if (error) {
      console.error("Erro ao salvar modelo:", error.message);
      toast.error(`Erro ao salvar modelo: ${error.message}`);
    } else {
      console.log("Modelo salvo com sucesso:", data);
      toast.success("Modelo salvo com sucesso!");
    }
  };

  const handleSaveModel = () => {
    if (editorRef.current) {
      const dadosModelo = editorRef.current.getContent();
      saveModel(nomeModelo, dadosModelo);
    } else {
      console.error("Editor reference not found.");
    }
  };

  const handleNew = () => {
    setNomeModelo("");

    if (editorRef.current) {
      console.log("Editor encontrado:", editorRef.current);

      if (typeof editorRef.current.setContent === "function") {
        editorRef.current.setContent("");
      } else {
        toast.error("Erro: não foi possível limpar o conteúdo do editor. ");
      }
    } else {
      toast.error(
        "Erro: não foi possível limpar o conteúdo do editor. Referência do editor não encontrada."
      );
    }
  };

  return (
    <DivContainerModelos>
      <DivModelos>
        <DivFlex2>
          <div>
            <TextInfos>Modelo documento:</TextInfos>
            <Input
              customWidth="15vw"
              value={nomeModelo}
              onChange={handleInputChange}
            />
          </div>
          <>
            <ButtonSaveModel onClick={handleSaveModel}>
              <PlusCircle size={16} />
              <TextButton>Salvar como modelo</TextButton>
            </ButtonSaveModel>
            <ButtonSaveModel onClick={handleNew}>
              <PlusCircle size={16} />
              <TextButton>Novo</TextButton>
            </ButtonSaveModel>
          </>
        </DivFlex2>
        <EditorModeloDocumento ref={editorRef} dadosPaciente={pacienteDados} />
      </DivModelos>
    </DivContainerModelos>
  );
};

export default ModelDocumentSpace;
