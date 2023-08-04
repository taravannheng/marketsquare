import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const requestPasswordReset = (email) => api.post(`/api/passwords/reset-request?email=${email}`);
export const verifyPasswordReset = (email, code) => api.post(`/api/passwords/reset-verification?email=${email}`, { code });
