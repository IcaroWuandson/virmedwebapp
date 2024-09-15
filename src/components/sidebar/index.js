import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddressBook,
  Stethoscope,
  User,
  Money,
  GearSix,
} from "@phosphor-icons/react";
import {
  Container,
  DivContent,
  SidebarItem,
  SidebarLink,
  SidebarList,
  SidebarWrapper,
} from "./styles";

const Sidebar = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardData = [
    { cardNumber: 1, icon: <AddressBook size={38} />, text: "Agenda" },
    { cardNumber: 2, icon: <Stethoscope size={38} />, text: "Atendimentos" },
    { cardNumber: 3, icon: <User size={38} />, text: "Pacientes" },
    { cardNumber: 4, icon: <Money size={38} />, text: "Financeiro" },
    { cardNumber: 5, icon: <GearSix size={38} />, text: "Configurações" },
  ];

  const handleCardClick = (cardNumber) => {
    const selectedCard = cardData.find(
      (card) => card.cardNumber === cardNumber
    );
    navigate(`/plataforma/${selectedCard.text.toLowerCase()}`);
  };

  const handleMouseEnter = () => {
    setHoveredCard(true);
  };

  const handleMouseLeave = () => {
    setHoveredCard(false);
  };

  return (
    <Container>
      <SidebarWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SidebarList>
          {cardData.map(({ cardNumber, icon, text }) => (
            <SidebarItem
              key={cardNumber}
              onClick={() => handleCardClick(cardNumber)}
            >
              <SidebarLink>
                {hoveredCard ? (
                  <DivContent>
                    {icon}
                    {text}
                  </DivContent>
                ) : (
                  icon
                )}
              </SidebarLink>
            </SidebarItem>
          ))}
        </SidebarList>
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
