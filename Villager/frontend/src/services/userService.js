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

export const getUserProfile = async (userId) => {
  try {
    const response = await handleRequest(axios.get(`${BASE_URL}/users/${userId}`));
    return response;
  } catch (error) {
    throw new Error('Error fetching user profile');
  }
};

// Additional functions for creating, updating, deleting user profiles can be added similarly

// Example for creating a user profile
export const createUserProfile = async (userData) => {
  try {
    const response = await handleRequest(axios.post(`${BASE_URL}/users`, userData));
    return response;
  } catch (error) {
    throw new Error('Error creating user profile');
  }
};

// Example for updating a user profile
export const updateUserProfile = async (userId, updatedData) => {
  try {
    const response = await handleRequest(axios.put(`${BASE_URL}/users/${userId}`, updatedData));
    return response;
  } catch (error) {
    throw new Error('Error updating user profile');
  }
};

// Example for deleting a user profile
export const deleteUserProfile = async (userId) => {
  try {
    const response = await handleRequest(axios.delete(`${BASE_URL}/users/${userId}`));
    return response;
  } catch (error) {
    throw new Error('Error deleting user profile');
  }
};
