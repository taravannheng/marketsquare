import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const getRelatedProducts = (productID) => api.get(`/api/products/related/${productID}`);