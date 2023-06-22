import PRODUCTS_ACTION_TYPES from "./product.types";
import ProductInterface from "../../interfaces/product-interface";

export const PRODUCTS_INITIAL_STATE = {
  products: [] as ProductInterface[],
};

export interface ProductActionInterface {
  type: string;
  payload: ProductInterface[];
}

export const productReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action: ProductActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};