import styled from "styled-components";
import { colors } from "../../theme";

export const HeaderComponet = styled.header`
  display: flex;
  flex-direction: row;
  padding: 20px;
  color: ${colors.white};
  align-items: center;
  justify-content: center;
  margin-left: 11.49vw;
  margin-right: 11.49vw;
  margin-top: 13.4vh;
`;

export const Image = styled.img`
  height: 26.85vh;
  width: 15.67vw;
  margin-right: 0px;
  margin-top: -70px;
  margin-bottom: -90px;
`;
export const DivImagem = styled.div`
  justify-content: center;
  align-items: center;
  margin-right: 9vw;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(to right, ${colors.third}, ${colors.fourth});
  justify-content: space-between;
  padding: 20px;
  border-radius: 25px;
  height: 21.3vh;
  position: relative;
  width: 123.33vw;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 3.7rem;
  margin: 0;
  font-weight: 600;
`;

export const Text2 = styled.p`
  font-size: 2.3rem;
  margin: 0;
  font-weight: 500;
`;

export const HomeContainer = styled.div`
  background-color: ${colors.white};
  margin-top: 40px;
`;
