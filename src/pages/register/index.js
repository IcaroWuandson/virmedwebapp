import React, { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import LogoMedAtend from "../../assets/logo.png";
import {
  LoginPage,
  FormContent,
  FormButton,
  FormInput,
  FormInputWithIcon,
  FormLabel,
  Text,
  TextPolitica,
  TextRegister,
  DivText,
  TogglePasswordVisibility,
  ButtonTitle,
  Image,
  Title,
  DivInput,
  DivForm,
  PasswordInputWrapper,
} from "./styles";

import { ToastContainer, toast } from "react-toastify";
import { ErrorToast } from "../../components/toast";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleregister = () => {
    navigate("/login");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        toast.error(
          <ErrorToast>
            <strong>Ocorreu um erro</strong>
          </ErrorToast>
        );
      } else {
        navigate("/plataforma/");
      }
    } catch (error) {
      toast.error(
        <ErrorToast>
          <strong>Ocorreu um erro</strong>
        </ErrorToast>
      );
    }

    setLoading(false);
  };

  return (
    <LoginPage>
      <FormContent>
        <Image src={LogoMedAtend} alt="logo" />
        <Title>Registrar-se</Title>
        <DivForm>
          <form onSubmit={handleLogin}>
            <DivInput>
              <FormLabel>
                Email de acesso:
                <FormInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormLabel>
            </DivInput>

            <DivInput>
              <FormLabel>
                Criar senha:
                <PasswordInputWrapper>
                  <FormInputWithIcon
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <TogglePasswordVisibility
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                  </TogglePasswordVisibility>
                </PasswordInputWrapper>
              </FormLabel>
            </DivInput>

            <FormButton type="submit">
              <ButtonTitle>REGISTRAR-SE</ButtonTitle>
            </FormButton>
          </form>
        </DivForm>
        <Text>
          Voltar a página de
          <TextRegister onClick={handleregister}> login</TextRegister>
        </Text>
        <DivText>
          <TextPolitica>Política de privacidade e termos de uso</TextPolitica>
        </DivText>
      </FormContent>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </LoginPage>
  );
}

export default Register;
