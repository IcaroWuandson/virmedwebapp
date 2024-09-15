import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export const SuccessToast = styled.div`
  background-color: #4caf50;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
`;

export const ErrorToast = styled.div`
  background-color: #f44336;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
`;

export const showSuccessToast = () => {
  toast.success(
    <SuccessToast>
      <strong>Sucesso!</strong> Operação concluída com êxito.
    </SuccessToast>
  );
};

export const showErrorToast = () => {
  toast.error(
    <ErrorToast>
      <strong>Erro!</strong> Algo deu errado na operação.
    </ErrorToast>
  );
};
