import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const createUser = (user) => api.post(`/api/users`, { user });
export const getUserByEmail = (email) => api.get(`/api/users/${email}`);
export const getUser = (token) => api.get(`/api/users`, { 
  headers: { 
    Authorization: `Bearer ${token}` 
  } 
});
export const updatePassword = (email, password) => api.patch(`/api/users/${email}/password`, { password });