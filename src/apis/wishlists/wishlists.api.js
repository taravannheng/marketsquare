import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const setAuthHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const createWishlist = (productID, token) =>
  api.post(`/api/wishlists`, { productID }, setAuthHeader(token));
export const getWishlistsByUserID = (userID, token) =>
  api.get(`/api/wishlists/users/${userID}`, setAuthHeader(token));
export const updateWishlist = (wishlist, token) =>
  api.put(`/api/wishlists/${wishlist._id}`, { ...wishlist }, setAuthHeader(token));
