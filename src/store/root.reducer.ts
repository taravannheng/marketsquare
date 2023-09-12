import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { productReducer } from './product/product.reducer';
import { cartReducer } from './cart/cart.reducer';
import { orderReducer } from './order/order.reducer';
import { userReducer } from './user/user.reducer';
import { reviewReducer } from './review/review.reducer';
import { relatedProductsReducer } from './related-product/related-product.reducer';
import persistConfig from './config/persist-config';

export const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
  user: userReducer,
  review: reviewReducer,
  relatedProduct: relatedProductsReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);