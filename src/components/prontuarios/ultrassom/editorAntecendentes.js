import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
`;

const EditorAntecendentes = forwardRef(({ dadosPaciente }, ref) => {
  const keyToTitleMap = {
    CPF: "CPF",
    nome: "Nome Completo",
    created_at: "Cadastrado em",
    dataNascimento: "Data de Nascimento",
    rg: "Registro Geral",
    sexoBiologico: "Sexo",
    identidadeGenero: "Gênero",
    nomeSocial: "Nome Social",
    nomeSocialCheck: "Possui nome social?",
    idade: "Idade",
    dataHoje: "Data de Hoje",
    cid10: "CID 10",
    endereco: "Endereço",
    medicoSolicitante: "Médico Solicitante",
    email: "Email",
    telefone1: "Telefone Principal",
    telefone2: "Telefone Secundário",
    pacientePrioritario: "Prioritário?",
    nomeMae: "Nome da mãe",
    nomePai: "Nome do pai",
    cpfResponsavel: "CPF do responsável",
    dataNascimentoResponsavel: "Data de nascimento do responsável",
  };

  const mergetagsList = Object.keys(dadosPaciente).map((key) => {
    return {
      value: `{${key}}`,
      title: keyToTitleMap[key] || key,
    };
  });

  const editorRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getContent() {
      if (editorRef.current) {
        return editorRef.current.getContent();
      } else {
        console.warn("Editor reference is null");
        return null;
      }
    },
    setContent(content) {
      if (editorRef.current) {
        editorRef.current.setContent(content);
      }
    },
  }));

  return (
    <Container>
      <Editor
        apiKey="aeyov2uvvttfkkj1cc79zats45so3rh1xpisriowxpq6u422"
        onInit={(event, editor) => {
          editorRef.current = editor;
        }}
        init={{
          language: "pt_BR",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Nome do autor",
          mergetags_prefix: "@",
          mergetags_suffix: "",
          mergetags_list: mergetagsList,
        }}
      />
    </Container>
  );
});

export default EditorAntecendentes;
