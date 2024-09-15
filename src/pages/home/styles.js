import styled from "styled-components";
import { colors } from "../../theme";

export const TextCard = styled.p`
  font-size: 1.8rem;
  color: ${colors.gray};
  font-weight: 500;
`;

export const Body = styled.div`
  padding: 20px;
  flex-direction: row;
  display: flex;
  margin: 0 13.28vw;
`;

export const GraficContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  flex-wrap: wrap;
`;

export const Card = styled.div`
  border: 1px solid ${colors.third};
  padding: 1vh;
  margin: 2vh;
  cursor: pointer;
  width: 39.06vw;
  height: 6.11vh;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.93vh;
  flex-direction: row;
  display: flex;
`;

export const DivIcon = styled.div`
  background-color: ${colors.third};
  border: 3px solid ${colors.primary};
  color: ${colors.white};
  border-radius: 5vh;
  width: 5vh;
  height: 5vh;
  margin-right: 1vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const HomeContainer = styled.div`
  background-color: ${colors.white};
`;

export const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const SwitchSlider = styled.div`
  position: relative;
  width: 2.08vw;
  height: 1.85vh;
  background-color: ${({ isChecked }) => (isChecked ? "#4CAF50" : "#ccc")};
  border-radius: 2.5vh;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    width: 0.94vw;
    height: 1.67vh;
    border-radius: 50%;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: transform 0.3s;
    transform: ${({ isChecked }) =>
      isChecked ? "translateX(20px)" : "translateX(0)"};
  }
`;

export const SliderCircle = styled.div`
  position: absolute;
  width: 0.83vw;
  height: 1.48vh;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s;
  transform: ${({ isChecked }) =>
    isChecked ? "translateX(20px)" : "translateX(0)"};
`;

export const DivSign = styled.div`
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 5px 15px;
  gap: 10px;
`;

export const TextSign = styled.p`
  font-size: 1.7rem;
  color: ${colors.gray};
  font-weight: 500;
`;

export const DivInfo = styled.div`
  justify-content: center;
  align-items: center;
  margin-left: 2vh;
  padding: 0.5vh;
  background-color: ${colors.fourth};
  color: ${colors.white};
  gap: 0.3vh;
  height: 2.63vh;
  min-width: 8.2vw;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
`;

export const TextInfo = styled.p`
  font-size: 1rem;
  color: ${colors.white};
  font-weight: 600;
`;
