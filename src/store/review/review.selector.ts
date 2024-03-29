import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectReviewSlice = (state: StoreStateInterface) => state.review;

export const selectReviews = createSelector(
  [selectReviewSlice],
  (review) => review.reviews
);

export const selectProductReviews = (productID: string) =>
  createSelector([selectReviews], (reviews) =>
    reviews.filter((review) => review.productID === productID)
  );

export const selectReviewsByUserID = (userID: string) =>
  createSelector([selectReviews], (reviews) =>
    reviews.filter((review) => review.userID === userID)
  );
