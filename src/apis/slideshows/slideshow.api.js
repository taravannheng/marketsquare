import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const getSlideshow = (slideshowID) => api.get(`/api/slideshows/${slideshowID}`);
export const getMultipleSlideshows = (slideshowIDs) =>
  api.get(`/api/slideshows/batch`, { params: { ids: slideshowIDs.join(",") } });
export const getSlideshows = () => api.get(`/api/slideshows`);
