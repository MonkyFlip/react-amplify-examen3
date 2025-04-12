import React, { useState } from "react";
import { login } from "../api/api";
import Modal from "../components/Modal";
import Register from "../pages/Register"; // Importa correctamente Register
import "../styles/Login.css";

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            alert(response.data.message);
            onLoginSuccess(); // Redirige al Dashboard si el inicio de sesión es exitoso
        } catch (error) {
            alert("Error: Credenciales inválidas");
        }
    };

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-btn" onClick={handleLogin}>
                <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
            </button>
            <p className="register-link">
                ¿No tienes cuenta?{" "}
                <span onClick={() => setShowRegisterModal(true)}>Regístrate</span>
            </p>
            {showRegisterModal && (
                <Modal title="Regístrate" onClose={() => setShowRegisterModal(false)}>
                    <Register onClose={() => setShowRegisterModal(false)} /> {/* Usa correctamente Register */}
                </Modal>
            )}
        </div>
    );
};

export default Login;
