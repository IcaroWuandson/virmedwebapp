import React from "react";
import styled from "styled-components";
import { XCircle } from "@phosphor-icons/react";

const SidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  background-color: #f8f9fa;
  padding: 10px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(100%)"};
`;

const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
`;

const SidebarDireita = ({ isVisible, onClose }) => {
  return (
    <SidebarContainer isVisible={isVisible}>
      <ButtonClose onClick={onClose}>
        <XCircle size={25} />
      </ButtonClose>

      <div>
        <h3>Detalhes do Agendamento</h3>
        <p>Adicione aqui o conteúdo que você deseja exibir no Sidebar.</p>
      </div>
    </SidebarContainer>
  );
};

export default SidebarDireita;
