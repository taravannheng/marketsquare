import ProductInterface from "../../interfaces/product-interface";
import ReviewInterface from "../../interfaces/review-interface";

// Define your state shape
interface ProductState {
  product: ProductInterface | null;
  currentRelatedProducts: ProductInterface[] | null;
  currentProductReviews: ReviewInterface[] | null;
}

// Define the initial state
const initialState: ProductState = {
  product: {} as ProductInterface | null,
  currentRelatedProducts: [] as ProductInterface[] | null,
  currentProductReviews: [] as ReviewInterface[] | null,
};

// Define your actions
type Action =
  | { type: 'SET_PRODUCT'; payload: ProductInterface | null }
  | { type: 'SET_RELATED_PRODUCTS'; payload: ProductInterface[] | null }
  | { type: 'SET_REVIEWS'; payload: ReviewInterface[] | null };

// Define your reducer
const productReducer = (state: ProductState = initialState, action: Action): ProductState => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return { ...state, product: action.payload };
    case 'SET_RELATED_PRODUCTS':
      return { ...state, currentRelatedProducts: action.payload };
    case 'SET_REVIEWS':
      return { ...state, currentProductReviews: action.payload };
    default:
      return state;
  }
};

export { initialState, productReducer };
export type { ProductState, Action };
