import axios from "axios";

const getCorrectedSearchTerm = (searchTerm) =>
  axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_SEARCH_CX}&q=${searchTerm}`
  );

export default getCorrectedSearchTerm;
