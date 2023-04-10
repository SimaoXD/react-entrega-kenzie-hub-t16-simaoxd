import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
