import axios from "axios";

const API_BASE_URL = "https://18.117.12.171";

export const login = async (email, password) => {
    return axios.post(`${API_BASE_URL}/login`, { email, password });
};

export const getUsers = async () => {
    return axios.get(`${API_BASE_URL}/users`);
};

export const createUser = async (data) => {
    return axios.post(`${API_BASE_URL}/users`, data);
};

export const updateUser = async (id, data) => {
    return axios.put(`${API_BASE_URL}/users/${id}`, data);
};

export const deleteUser = async (id) => {
    return axios.delete(`${API_BASE_URL}/users/${id}`);
};
