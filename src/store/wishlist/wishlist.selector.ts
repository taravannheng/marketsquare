import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectWishlistSlice = (state: StoreStateInterface) => state.wishlist;

export const selectWishlists = createSelector(
  [selectWishlistSlice],
  (wishlist) => wishlist.wishlists
);

export const selectWishlist = (productID: string) =>
  createSelector([selectWishlists], (wishlists) =>
    wishlists && wishlists.find((wishlist) => wishlist.productID === productID)
  );
