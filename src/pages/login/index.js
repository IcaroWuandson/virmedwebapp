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
  DivForget,
  ForgetLink,
  TextFoget,
  PasswordInputWrapper,
} from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleforget = () => {
    navigate("/esqueci-a-senha");
  };

  const handleregister = () => {
    navigate("/cadastro");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(user);

    if (error) {
      alert(error.error_description || error.message);
    } else {
      navigate("/plataforma/");
    }
    setLoading(false);
  };

  return (
    <LoginPage>
      <FormContent>
        <Image src={LogoMedAtend} alt="logo" />
        <Title>Seja bem vindo ao MedAtend!</Title>
        <DivForm>
          <form onSubmit={handleLogin}>
            <DivInput>
              <FormLabel>
                Email:
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
                Senha:
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

            <DivForget>
              <ForgetLink onClick={handleforget}>
                <TextFoget>Esqueci a senha</TextFoget>
              </ForgetLink>
            </DivForget>

            <FormButton type="submit">
              <ButtonTitle>ENTRAR</ButtonTitle>
            </FormButton>
          </form>
        </DivForm>
        <Text>
          Ainda não possui uma conta?
          <TextRegister onClick={handleregister}> Registrar-se</TextRegister>
        </Text>
        <DivText>
          <TextPolitica>Política de privacidade e termos de uso</TextPolitica>
        </DivText>
      </FormContent>
    </LoginPage>
  );
}

export default Login;
