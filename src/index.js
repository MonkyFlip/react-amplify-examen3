import React from "react";
import ReactDOM from "react-dom/client"; // Importa el módulo correcto para React 18
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea el root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
