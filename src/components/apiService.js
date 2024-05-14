import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getFunctions = async () => {
    try {
        const response = await axios.get(`${API_URL}/funciones`);
        return response.data;
    } catch (error) {
        console.error("Error fetching functions:", error);
        throw error;
    }
};

export const addFunction = async (newFunction) => {
    try {
        const response = await axios.post(`${API_URL}/funciones`, newFunction);
        return response.data;
    } catch (error) {
        console.error("Error adding function:", error);
        throw error;
    }
};

export const updateFunction = async (id, updatedFunction) => {
    try {
        const response = await axios.put(`${API_URL}/funciones/${id}`, updatedFunction);
        return response.data;
    } catch (error) {
        console.error("Error updating function:", error);
        throw error;
    }
};

export const deleteFunction = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/funciones/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting function:", error);
        throw error;
    }
};
