import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectUserReviewSlice = (state: StoreStateInterface) => state.userReview;

export const selectUserReviews = createSelector(
  [selectUserReviewSlice],
  (userReview) => userReview.userReviews
);

export const selectUserReview = (id: string) =>
  createSelector([selectUserReviews], (userReviews) =>
    userReviews.find((review) => review._id === id)
  );