import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Examen 3 - API</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
