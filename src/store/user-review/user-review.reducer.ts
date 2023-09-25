import _ from "lodash";

import USER_REVIEW_ACTION_TYPES from "./user-review.types";

import ReviewInterface from "../../interfaces/review-interface";

export const USER_REVIEWS_INITIAL_STATE = {
  userReviews: [] as ReviewInterface[],
};

export interface UserReviewActionInterface {
  type: string;
  payload: ReviewInterface[] | ReviewInterface;
}

export const userReviewReducer = (
  state = USER_REVIEWS_INITIAL_STATE,
  action: UserReviewActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REVIEW_ACTION_TYPES.ADD_USER_REVIEWS:
      const uniqueReviews = _.differenceBy(payload as ReviewInterface[], state.userReviews, "_id");
      return { ...state, userReviews: [...state.userReviews, ...uniqueReviews]};
    case USER_REVIEW_ACTION_TYPES.ADD_USER_REVIEW:
      const isUnique = _.differenceBy([payload as ReviewInterface], state.userReviews, "_id").length > 0;

      if (!isUnique) return state;

      return {
        ...state,
        userReviews: [...state.userReviews, payload as ReviewInterface],
      };
    case USER_REVIEW_ACTION_TYPES.UPDATE_USER_REVIEW:
      return {
        ...state,
        userReviews: state.userReviews.map((review) =>
          review._id === (payload as ReviewInterface)._id ? payload : review
        ),
      };
    case USER_REVIEW_ACTION_TYPES.DELETE_USER_REVIEW:
      return {
        ...state,
        userReviews: state.userReviews.filter(
          (review) => review._id !== (payload as ReviewInterface)._id
        ),
      };
    case USER_REVIEW_ACTION_TYPES.CLEAR_USER_REVIEWS:
      return { ...state, userReviews: [] };
    default:
      return state;
  }
};
