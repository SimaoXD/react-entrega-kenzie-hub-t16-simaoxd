import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />

      <AppRoutes />
    </div>
  );
};

export default App;
