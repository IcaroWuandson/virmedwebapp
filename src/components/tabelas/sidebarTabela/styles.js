import styled from "styled-components";
import { colors } from "../../../theme";

export const SidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 31vw;
  background-color: #f8f9fa;
  padding: 10px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.4);
  z-index: 1000;
  transition: transform 0.8s ease-in-out;

  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(100%)"};
`;

export const DivButtomClose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const TextHeader = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 20px;
`;

export const TextInfo = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: ${(props) => props.customWidth || "8vw"};
  height: 2.97vh;
  padding: 5px;
  box-sizing: border-box;
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  border: none;
  border-radius: 3px;
  font-size: 1.3rem;
`;

export const Select = styled.select`
  width: ${(props) => props.customWidth || "10vw"};
  height: ${(props) => props.customHeight || "2.98vh"};
  box-sizing: border-box;
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  border: none;
  border-radius: 5px;

  option {
    color: ${colors.third};
    background-color: ${colors.white};
    font-size: 11px;
  }
`;

export const DivControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 40px;
`;

export const DivColmun = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Label = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 5px;
`;

export const DivValorFinal = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const TextFinal = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ButtonSave = styled.button`
  background-color: ${colors.third};
  width: 9.12vw;
  height: 3.89vh;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 1.4rem;
  display: inline-block;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
  }
`;

export const ButtonEdit = styled.button`
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  color: "#334155";
  border-radius: 5px;
  border: none;
  width: 9.12vw;
  height: 3.89vh;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray};
    color: white;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: fixed;
  bottom: 0;
  padding-bottom: 5vh;
`;
