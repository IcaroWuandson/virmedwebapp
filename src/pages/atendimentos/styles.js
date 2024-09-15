import styled from "styled-components";

import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  position: absolute;
  margin-left: 12.05vw;
`;

export const DivInfos = styled.div`
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.fourth};
  padding: 0.93vh;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  flex-direction: row;
  display: flex;
  margin-top: 6.58vh;
`;

export const DivInfosPatietes = styled.div`
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.fourth};
  padding: 0.93vh;
  border-radius: 2px;
  width: auto;
  height: 29px;
  flex-direction: row;
  display: flex;
  margin: 8px 290px 8px 20px;
`;

export const Text = styled.p`
  font-size: 2.9rem;
  color: ${colors.text};
  font-weight: 600;
  line-height: 110px;
`;

export const TextData = styled.p`
  font-size: 1.5rem;
  color: ${colors.text};
  font-weight: 400;
  margin-left: 15px;
`;

export const TextDataPatietes = styled.p`
  font-size: 1.1rem;
  color: ${colors.text};
  font-weight: 600;
`;

export const DivButtonControls = styled.div`
  align-items: center;
  margin-top: 40px;
  border-bottom: 1px solid #e2e8f0;
  border-top: 1px solid #e2e8f0;
  border-left: 1px solid #e2e8f0;
  width: 86.37vw;
  display: flex;
  flex-direction: row;
`;

export const DivLine = styled.div`
  border-left: 1px solid #e2e8f0;
  display: flex;
  flex-direction: row;
  height: 75vh;
`;

export const DivSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const Input = styled.input`
  width: 18.84vw;
  height: 2.5vh;
  border-radius: 30px;
  border: 1px solid #e2e8f0;
  text-align: left;
  padding-left: 15px;

  &::placeholder {
    color: #cbd5e1;
    text-align: left;
  }
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
