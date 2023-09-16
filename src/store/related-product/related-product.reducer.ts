import RELATED_PRODUCTS_ACTION_TYPES from "./related-product.types";
import {
  addRelatedProducts,
} from "./related-product.action";
import ProductInterface from "../../interfaces/product-interface";

export const RELATED_PRODUCTS_INITIAL_STATE = {
  relatedProducts: [] as ProductInterface[],
};

export interface RelatedProductsActionInterface {
  type: string;
  payload: Record<string, ProductInterface[]>;
}

export const relatedProductsReducer = (
  state = RELATED_PRODUCTS_INITIAL_STATE,
  action: RelatedProductsActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case RELATED_PRODUCTS_ACTION_TYPES.ADD_RELATED_PRODUCTS:
      return { ...state, relatedProducts: addRelatedProducts(state.relatedProducts, payload) };
    default:
      return state;
  }
};
