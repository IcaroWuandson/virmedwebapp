import React, { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import {
  LoginPage,
  FormContent,
  FormButton,
  FormInput,
  FormLabel,
  Text,
  TextRegister,
  ButtonTitle,
  Title,
  DivInput,
  DivForm,
  ForgetLink,
  DivTextVoltar,
} from "./styles";

import { ToastContainer, toast } from "react-toastify";
import { ErrorToast, SuccessToast } from "../../components/toast";

function RecuperarConta() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleregister = () => {
    navigate("/login");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "https://example.com/update-password",
      });

      if (error) {
        toast.error(
          <ErrorToast>
            <strong>Ocorreu um erro</strong>
          </ErrorToast>
        );
      } else {
        toast.success(
          <SuccessToast>
            <strong>Email enviado com sucesso</strong>
          </SuccessToast>
        );
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
        <DivTextVoltar>
          <ForgetLink>
            <TextRegister onClick={handleregister}>&lt; voltar</TextRegister>
          </ForgetLink>
        </DivTextVoltar>
        <Title>Recuperar senha</Title>
        <Text>Insira seu email para a recuperação de senha</Text>
        <DivForm>
          <form onSubmit={handleLogin}>
            <DivInput>
              <FormLabel>
                Email :
                <FormInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormLabel>
            </DivInput>

            <FormButton type="submit">
              <ButtonTitle>CONFIRMAR</ButtonTitle>
            </FormButton>
          </form>
        </DivForm>
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

export default RecuperarConta;
