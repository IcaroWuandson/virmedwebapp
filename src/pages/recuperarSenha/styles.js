import styled from "styled-components";
import { colors } from "../../theme";

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, ${colors.third}, ${colors.fourth});
`;

export const Title = styled.span`
  color: ${colors.black};
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ButtonTitle = styled.span`
  color: ${colors.white};
  font-size: 20px;
  margin-bottom: 30px;
`;

export const FormContent = styled.div`
  background-color: ${colors.white};
  height: auto;
  width: 35.94vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 20px;
`;

export const DivInput = styled.div`
  width: auto;
  height: auto;
  border-radius: 2px;
`;

export const DivForm = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  form {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-items: self-start;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const FormInput = styled.input`
  margin-top: 10px;
  background-color: ${colors.inputs};
  height: 5.18vh;
  border: none;

  width: 26.3vw;
`;

export const FormButton = styled.button`
  background-color: ${colors.third};
  height: 5.18vh;
  color: ${colors.white};
  border-radius: 2px;
  border: none;
  margin-top: 10px;
  width: 26.56vw;
  margin-bottom: 50px;
`;

export const ForgetLink = styled.a`
  color: ${colors.black};
  text-decoration: none;

  color: ${colors.third};
  display: inline-block;
  justify-content: center;
  align-items: center;

  height: 12vh;
  width: 34vw;
`;

export const TextFoget = styled.span`
  font-size: 14px;
  margin-top: 3px;
`;

export const TextRegister = styled.span`
  font-size: 16px;
  color: ${colors.gray};
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 16px;
  color: ${colors.gray};
`;

export const DivText = styled.div`
  margin-top: 110px;
  justify-content: center;
  align-items: center;
`;

export const DivForget = styled.div`
  justify-content: center;
  align-self: center;
  align-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
`;

export const DivTextVoltar = styled.div`
  justify-content: flex-start;
  align-content: center;
`;
