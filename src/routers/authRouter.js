import { Route, Routes } from "react-router-dom";

import Login from "../pages/login";

const AuthRouter = () => {
  return (
    <Routes>
      <Route exact path="" element={<Login />} />
    </Routes>
  );
};
export default AuthRouter;
