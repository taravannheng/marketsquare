import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const createReview = (review) => api.post(`/api/reviews`, { ...review });
export const getReview = (reviewID) => api.get(`/api/reviews/${reviewID}`);
export const getMultipleReviews = (reviewIDs) =>
  api.get(`/api/reviews/batch`, { params: { ids: reviewIDs.join(",") } });
export const getReviewsByProductID = (productID) => api.get(`/api/reviews/product/${productID}`);
export const getReviews = () => api.get(`/api/reviews`);
export const updateReview = (review, reviewID) => api.put(`/api/reviews/${reviewID}`, { ...review });
export const deleteReview = (reviewID) => api.delete(`/api/reviews/${reviewID}`);
