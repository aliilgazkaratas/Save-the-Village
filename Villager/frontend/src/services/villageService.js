import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api'; // Replace with your backend URL

const handleRequest = async (requestPromise) => {
  try {
    const response = await requestPromise;
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const getVillages = async () => {
  try {
    const response = await handleRequest(axios.get(`${BASE_URL}/villages`));
    return response;
  } catch (error) {
    throw new Error('Error fetching villages');
  }
};

// Additional functions for creating, updating, deleting villages can be added similarly

// Example for creating a village
export const createVillage = async (villageData) => {
  try {
    const response = await handleRequest(axios.post(`${BASE_URL}/villages`, villageData));
    return response;
  } catch (error) {
    throw new Error('Error creating village');
  }
};

// Example for updating a village
export const updateVillage = async (villageId, updatedData) => {
  try {
    const response = await handleRequest(axios.put(`${BASE_URL}/villages/${villageId}`, updatedData));
    return response;
  } catch (error) {
    throw new Error('Error updating village');
  }
};

// Example for deleting a village
export const deleteVillage = async (villageId) => {
  try {
    const response = await handleRequest(axios.delete(`${BASE_URL}/villages/${villageId}`));
    return response;
  } catch (error) {
    throw new Error('Error deleting village');
  }
};
