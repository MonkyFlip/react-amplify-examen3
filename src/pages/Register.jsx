import React, { useState } from "react";
import { createUser } from "../api/api";
import "../styles/Register.css";

const Register = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUser({ username, email, password });
            alert("Usuario registrado con éxito");
            onClose(); // Cierra el modal después de registrar
        } catch (error) {
            alert("Error al registrar usuario");
        }
    };

    return (
        <div className="register-form">
            <h2>Registrar Usuario</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="register-btn">
                    <i className="fas fa-user-plus"></i> Registrar
                </button>
            </form>
        </div>
    );
};

export default Register;
