import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes";
import { TechUpdate } from "./components/Modais/UpdateTech";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <TechUpdate />

      <AppRoutes />
    </div>
  );
};

export default App;
