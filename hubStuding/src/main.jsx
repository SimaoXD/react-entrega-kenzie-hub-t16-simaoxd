import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { TechProvider } from "./providers/TechContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <GlobalStyle />
          <App />
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
