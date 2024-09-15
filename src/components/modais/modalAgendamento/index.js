import React from "react";
import styled from "styled-components";
import FormAgendamentoModal from "./formAgendamentoModal";
import { XCircle } from "@phosphor-icons/react";
import { DivClose } from "./styles";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ModalContent = styled.div`
  background-color: white;
  position: relative;
  width: auto;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
`;

const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
`;

const ModalAgendamento = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <DivClose>
          <ButtonClose onClick={onClose}>
            <XCircle size={25} />
          </ButtonClose>
        </DivClose>

        <FormAgendamentoModal />
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalAgendamento;
