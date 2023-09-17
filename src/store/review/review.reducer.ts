import REVIEW_ACTION_TYPES from "./review.types";
import {
  addReviews,
} from "./review.action";
import ReviewInterface from "../../interfaces/review-interface";

export const REVIEWS_INITIAL_STATE = {
  reviews: [] as ReviewInterface[],
};

export interface ReviewActionInterface {
  type: string;
  payload: Record<string, ReviewInterface[]>;
}

export const reviewReducer = (
  state = REVIEWS_INITIAL_STATE,
  action: ReviewActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case REVIEW_ACTION_TYPES.ADD_REVIEWS:
      return { ...state, reviews: addReviews(state.reviews, payload) };
    default:
      return state;
  }
};
