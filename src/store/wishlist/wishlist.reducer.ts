import WISHLIST_ACTION_TYPES from "./wishlist.types";
import WishlistInterface from "../../interfaces/wishlist.interface";

export const WISHLIST_INITIAL_STATE = {
  wishlists: [] as WishlistInterface[],
};

export interface WishlistActionInterface {
  type: string;
  payload: WishlistInterface[] | WishlistInterface;
}

export const wishlistReducer = (
  state = WISHLIST_INITIAL_STATE,
  action: WishlistActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case WISHLIST_ACTION_TYPES.ADD_WISHLISTS:
      return {
        ...state,
        wishlists: payload,
      };
    case WISHLIST_ACTION_TYPES.ADD_WISHLIST:
      return {
        ...state,
        wishlists: [...state.wishlists, payload],
      };
    case WISHLIST_ACTION_TYPES.REMOVE_WISHLIST:
      // remove the wishlist with the productID
      return {
        ...state,
        wishlists: state.wishlists.filter(
          (wishlist) => {
            if (!Array.isArray(payload)) {
              return wishlist.productID !== payload.productID
            }

            return state.wishlists;
          }
        ),
      };
    case WISHLIST_ACTION_TYPES.RESET_WISHLISTS:
      return {
        ...state,
        wishlists: [],
      };
    default:
      return state;
  }
};