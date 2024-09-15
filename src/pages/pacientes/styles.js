import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 10.05vw;
  position: absolute;
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

export const ButtonCreatePatients = styled.button`
  justify-content: center;
  align-items: center;
  background-color: ${colors.fourth};
  padding: 0.93vh;
  border-radius: 2px;
  border: none;
  width: 9.12vw;
  height: 29px;
  flex-direction: row;
  display: flex;
  margin: 8px 290px 8px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
    border-radius: 10px;
  }
`;

export const TextHeader = styled.p`
  color: ${colors.third};
  margin-top: 6.58vh;
  font-size: 2.3rem;
  font-weight: 600;
`;

export const TextButtonCreate = styled.p`
  font-size: 1.4rem;
  color: ${colors.white};
  font-weight: 600;
`;

export const TextInfoPatiets = styled.p`
  font-size: 1.3rem;
  color: ${colors.white};
  font-weight: 500;
`;

export const Input = styled.input`
  width: 18.84vw;
  height: 2.5vh;
  border-radius: 30px;
  border: 1px solid #e2e8f0;
  text-align: left;
  padding-left: 10px;

  &::placeholder {
    color: #cbd5e1;
  }
`;

export const DivInfosPatietes = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${colors.fourth};
  color: ${colors.white};
  padding: 0.93vh;
  border-radius: 2px;
  gap: 5px;
  width: auto;
  height: 29px;
  flex-direction: row;
  display: flex;
  margin: 8px 0px 8px 170px;

  &:hover {
    background-color: ${colors.primary};
  }
`;

export const DivLine = styled.div`
  border-left: 1px solid #e2e8f0;
  display: flex;
  flex-direction: row;
  height: 75vh;
`;
