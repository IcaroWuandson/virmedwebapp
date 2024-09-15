import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppRouter from "./appRouter";
import AuthRouter from "./authRouter";
import { supabase } from "../services/supabase";
import RecuperarConta from "../pages/recuperarSenha";
import Register from "../pages/register";

const SessionContext = createContext();

export const useSession = () => {
  return useContext(SessionContext);
};

const PlataformaRouter = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SessionContext.Provider value={session}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login/*"
            element={<AuthRouter key={session?.user?.id} />}
          />
          <Route
            path="/plataforma/*"
            element={<AppRouter key={session?.user?.id} />}
          />
          <Route
            exact
            path="/esqueci-a-senha"
            element={<RecuperarConta key={session?.user?.id} />}
          />
          <Route
            exact
            path="/cadastro"
            element={<Register key={session?.user?.id} />}
          />
          <Route
            path="*"
            element={
              session ? (
                <Navigate key="login" to="/plataforma" />
              ) : (
                <Navigate key="login" to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default PlataformaRouter;
