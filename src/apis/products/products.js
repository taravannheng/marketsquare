import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const getProduct = (productID) => api.get(`/api/product/${productID}`);
export const getMultipleProducts = (productIDs) =>
  api.get(`/api/products/batch`, { params: { ids: productIDs.join(",") } });
export const getProducts = () => api.get(`/api/products`);
