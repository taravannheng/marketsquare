import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { productReducer } from './product/product.reducer';
import { cartReducer } from './cart/cart.reducer';
import persistConfig from './config/persist-config';

export const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);