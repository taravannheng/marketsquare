import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const createOrder = (data) => api.post(`/api/orders`, { ...data });
export const getOrdersByUserID = (userID) => api.get(`/api/orders/users/${userID}`);
export const getOrdersByUserIDAndProductID = (userID, productID) => api.get(`/api/orders/users/${userID}/products/${productID}`);
