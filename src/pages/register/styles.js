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
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 3vh;
`;

export const ButtonTitle = styled.span`
  color: ${colors.white};
  font-size: 1.2rem;
  margin-bottom: 3vh;
`;

export const FormContent = styled.div`
  background-color: ${colors.white};
  height: 66.66vh;
  width: 35.93vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const DivInput = styled.div`
  width: 26.56vw;
  height: 8.14vh;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  margin-left: 1.3vw;
`;

export const DivForm = styled.div`
  justify-content: center;
  align-items: center;

  form {
    justify-content: center;
    align-items: center;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-items: self-start;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.gray};
`;

export const FormInput = styled.input`
  margin-top: 1vh;
  background-color: ${colors.inputs};
  padding: 10px;
  border: none;
`;

export const FormButton = styled.button`
  background-color: ${colors.third};
  width: 26.56vw;
  height: 5.18vh;
  color: ${colors.white};
  border-radius: 2px;
  border: none;
  margin-top: 10px;
  margin-left: 1.3vw;
`;

export const ForgetLink = styled.a`
  color: ${colors.black};
  text-decoration: none;
  margin-left: 20.53vw;
  color: ${colors.third};
  display: inline-block;
`;

export const TextFoget = styled.span`
  font-size: 14px;
  margin-top: 3px;
`;

export const TextRegister = styled.span`
  font-size: 14px;
  color: ${colors.third};
  margin-top: 3px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 16px;
  margin-top: 10px;
  color: ${colors.gray};
`;

export const DivText = styled.div`
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DivForget = styled.div`
  margin-top: 2px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const TextPolitica = styled.span`
  font-size: 12px;
  color: ${colors.gray};
  cursor: pointer;
`;

export const Image = styled.img`
  height: auto;
  margin-bottom: 20px;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

export const FormInputWithIcon = styled.input`
  width: calc(100% - 20px);
  padding-right: 30px;
  background-color: ${colors.inputs};
  padding: 10px;
  border: none;
`;

export const TogglePasswordVisibility = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
