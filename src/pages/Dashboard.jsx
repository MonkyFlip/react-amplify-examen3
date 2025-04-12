import React, { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../api/api";
import Modal from "../components/Modal";
import "../styles/Dashboard.css";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [action, setAction] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            alert("Error al obtener usuarios");
        }
    };

    const handleAction = async (user) => {
        try {
            if (action === "edit") {
                const updatedData = { ...modalData };
                // Si la contraseña está vacía, no se envía para la edición
                if (!updatedData.password) {
                    delete updatedData.password;
                }
                await updateUser(user.id, updatedData);
                alert("Usuario actualizado");
            } else if (action === "create") {
                await createUser(modalData);
                alert("Usuario creado");
            } else if (action === "delete") {
                await deleteUser(user.id);
                alert("Usuario eliminado");
            }
            fetchUsers();
            setShowModal(false);
        } catch (error) {
            alert("Error al realizar la acción");
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Usuarios</h1>
            <button
                className="action-btn"
                onClick={() => {
                    setAction("create");
                    setShowModal(true);
                    setModalData({});
                }}
            >
                <i className="fas fa-plus"></i> Agregar Usuario
            </button>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    className="action-btn edit-btn"
                                    onClick={() => {
                                        setAction("edit");
                                        setShowModal(true);
                                        setModalData(user);
                                    }}
                                >
                                    <i className="fas fa-edit"></i> Editar
                                </button>
                                <button
                                    className="action-btn delete-btn"
                                    onClick={() => {
                                        setAction("delete");
                                        handleAction(user);
                                    }}
                                >
                                    <i className="fas fa-trash"></i> Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <Modal
                    title={action === "edit" ? "Editar Usuario" : "Agregar Usuario"}
                    onClose={() => setShowModal(false)}
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleAction(modalData);
                        }}
                    >
                        <div className="input-group">
                            <label htmlFor="username">Nombre</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Nombre"
                                value={modalData.username || ""}
                                onChange={(e) =>
                                    setModalData({ ...modalData, username: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={modalData.email || ""}
                                onChange={(e) =>
                                    setModalData({ ...modalData, email: e.target.value })
                                }
                                required
                            />
                        </div>
                        {action === "create" && (
                            <div className="input-group">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Contraseña"
                                    value={modalData.password || ""}
                                    onChange={(e) =>
                                        setModalData({ ...modalData, password: e.target.value })
                                    }
                                    required
                                />
                            </div>
                        )}
                        {action === "edit" && (
                            <div className="input-group">
                                <label htmlFor="password">Contraseña (Opcional)</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Dejar en blanco para no cambiar"
                                    value={modalData.password || ""}
                                    onChange={(e) =>
                                        setModalData({ ...modalData, password: e.target.value })
                                    }
                                />
                            </div>
                        )}
                        <button type="submit" className="modal-btn">
                            <i className="fas fa-save"></i> Guardar
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default Dashboard;
