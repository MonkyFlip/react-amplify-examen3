import React from "react";
import "../styles/Modal.css";

const Modal = ({ title, children, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>{title}</h2>
                {children}
                <button className="close-btn" onClick={onClose}>
                    <i className="fas fa-times"></i> Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;
