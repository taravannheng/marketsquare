import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const createOrder = (cartID) => api.post(`/api/orders?cartID=${cartID}`);
export const getOrdersByUserIDAndProductID = (userID, productID) => api.get(`/api/orders/users/${userID}/products/${productID}`);
