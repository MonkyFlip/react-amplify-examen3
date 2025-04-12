import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";
import Header from "./components/Header";

function App() {
  const handleLoginSuccess = () => {
    window.location.href = "/dashboard"; // Redirige al Dashboard tras iniciar sesión
  };

  return (
    <Router>
      <div className="app">
        {/* Encabezado visible en todas las páginas */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
