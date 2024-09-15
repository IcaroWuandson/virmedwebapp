import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EditorTexto() {
  return (
    <>
      <Editor
        apiKey="aeyov2uvvttfkkj1cc79zats45so3rh1xpisriowxpq6u422"
        init={{
          language: "pt_BR",
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate  mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_prefix: "@",
          mergetags_suffix: "",
          mergetags_list: [
            { value: "CPF", title: "CPF" },
            { value: "Email", title: "Nome Completo" },
            { value: "Email", title: "Data de Nascimento" },
            { value: "Email", title: "Registro Geral" },
            { value: "Email", title: "Sexo" },
            { value: "Email", title: "Idade" },
            { value: "Email", title: "Data de hoje" },
            { value: "Email", title: "CID 10" },
            { value: "Email", title: "Endereço" },
            { value: "Email", title: "Médico solicitante" },
            { value: "Email", title: "Email" },
            { value: "Email", title: "Telefone do paciente" },
          ],
        }}
      />
    </>
  );
}
