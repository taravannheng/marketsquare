import REVIEW_ACTION_TYPES from "./review.types";
import ReviewInterface from "../../interfaces/review-interface";
import _ from "lodash";

export const REVIEWS_INITIAL_STATE = {
  reviews: [] as ReviewInterface[],
};

export interface ReviewActionInterface {
  type: string;
  payload: ReviewInterface[] | ReviewInterface;
}

export const reviewReducer = (
  state = REVIEWS_INITIAL_STATE,
  action: ReviewActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case REVIEW_ACTION_TYPES.ADD_REVIEWS:
      const uniqueReviews = _.differenceBy(payload as ReviewInterface[], state.reviews, "_id");
      return { ...state, reviews: [...state.reviews, ...uniqueReviews]};
    case REVIEW_ACTION_TYPES.ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, payload as ReviewInterface],
      };
    case REVIEW_ACTION_TYPES.UPDATE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review._id === (payload as ReviewInterface)._id ? payload : review
        ),
      };
    case REVIEW_ACTION_TYPES.DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review._id !== (payload as ReviewInterface)._id
        ),
      };
    case REVIEW_ACTION_TYPES.CLEAR_REVIEWS:
      return { ...state, reviews: [] };
    default:
      return state;
  }
};
