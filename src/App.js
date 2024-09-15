import PlataformaRouter from "./routers/plataformaRouter";
import { StyleSheetManager } from "styled-components";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "customWidth"}>
      <PlataformaRouter />
      <ToastContainer />
    </StyleSheetManager>
  );
}

export default App;
