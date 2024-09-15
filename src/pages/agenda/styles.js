import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 11.05vw;
  position: absolute;
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

export const DivText = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.p`
  font-size: 2.9rem;
  color: ${colors.text};
  font-weight: 600;
`;

export const TextData = styled.p`
  font-size: 1.5rem;
  color: ${colors.text};
  font-weight: 400;
  margin-left: 15px;
`;

export const DivTopInfos = styled.div`
  align-items: center;
  margin-top: 40px;
  border-bottom: 1px solid #e2e8f0;
  border-top: 1px solid #e2e8f0;
  min-width: 86.37vw;
  display: flex;
  flex-direction: row;
`;

export const DivSeparetor = styled.div`
  min-width: 26.14vw;
  border-right: 1px solid #e2e8f0;
  height: 5.78vh;
  padding: 13px;
`;

export const DivPatientes = styled.div`
  justify-content: center;
  background-color: ${colors.fourth};
  padding: 5px;
  border-radius: 5px;
  min-width: 10.58vw;
  min-height: 2.78vh;
  text-align: center;
`;

export const TextPatients = styled.p`
  font-size: 1.1rem;
  color: ${colors.text};
  font-weight: 600;
`;

export const DivControlsInfos = styled.div`
  justify-content: space-around;
  gap: 30px;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const Select = styled.select`
  min-width: 12.14vw;
  min-height: 2.97vh;
  box-sizing: border-box;
  background-color: rgba(
    ${parseInt(colors.input.slice(1, 3), 16)},
    ${parseInt(colors.input.slice(3, 5), 16)},
    ${parseInt(colors.input.slice(5, 7), 16)},
    0.8
  );
  border: none;
  border-radius: 5px;
  margin-left: 15px;

  option {
    color: ${colors.third};
    background-color: ${colors.white};
    font-size: 11px;
  }
`;

export const Name = styled.p`
  font-size: 1.4rem;
  margin-top: 5px;
  font-weight: 500;
`;

export const Input = styled.input`
  min-width: 18.84vw;
  min-height: 2.5vh;
  border-radius: 30px;
  border: 1px solid #e2e8f0;
  text-align: left;
  padding-left: 10px;

  right: 20px;

  &::placeholder {
    color: #cbd5e1;
  }
`;

export const DivSeparetor2 = styled.div`
  min-width: 26.14vw;
  border-right: 1px solid #e2e8f0;
  height: 78.78vh;
  padding: 13px;
`;

export const DivButtonControls = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonShort = styled.button`
  min-width: 4.5vw;
  min-height: 2.78vh;
  border: none;
  border-left: 1px solid #fff;
  color: ${colors.gray};
  cursor: pointer;
  &:hover {
    background-color: ${colors.third};
    color: white;
    border-radius: 20px;
  }
`;

export const ButtonLong = styled.button`
  min-width: 7.68vw;
  min-height: 2.78vh;
  border: none;
  border-left: 1px solid #fff;
  cursor: pointer;
  &:hover {
    background-color: ${colors.third};
    color: white;
    border-radius: 20px;
  }
`;

export const TextButton = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const TextButtonControls = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const TextButtonControls2 = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
`;

export const ButtonGray = styled.button`
  min-width: 21.15vw;
  min-height: 3.05vh;
  margin-top: 5px;
  border: none;
  background-color: ${colors.input};
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.third};
    color: white;
    border-radius: 10px;
  }
`;

export const ButtonWhite = styled.button`
  min-width: 21.15vw;
  min-height: 3.05vh;
  margin-top: 5px;
  border: 1px solid #e2e8f0;
  background-color: ${colors.white};
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray};
    color: white;
    border-radius: 10px;
  }
`;

export const ButtonBlue = styled.button`
  min-width: 21.15vw;
  min-height: 3.05vh;
  margin-top: 5px;
  border: 1px solid #e2e8f0;
  background-color: ${colors.third};
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.black};
    color: white;
    border-radius: 10px;
  }
`;

export const DivBottomInfos = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivButtonColors = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

export const DivAgenda = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60vw;
`;
