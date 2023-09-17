import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectReviewSlice = (state: StoreStateInterface) => state.review;

export const selectReviews = createSelector(
  [selectReviewSlice],
  (review) => review.reviews
);
