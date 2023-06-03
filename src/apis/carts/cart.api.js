import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const createCart = (products) => api.post(`/api/carts`, { products });
export const getCarts = () => api.get(`/api/carts`);
export const getMultipleCarts = (cartIDs) =>
  api.get(`/api/carts/batch`, { params: { ids: cartIDs.join(",") } });
export const getCart = (cartID) => api.get(`/api/carts/${cartID}`);
