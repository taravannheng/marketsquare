import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const signIn = (user) => api.post(`/api/signin`, { email: user.email, password: user.password });