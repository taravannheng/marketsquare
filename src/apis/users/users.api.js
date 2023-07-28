import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const createUser = (user) => api.post(`/api/users`, { user });
export const getUser = (email) => api.get(`/api/users/${email}`);