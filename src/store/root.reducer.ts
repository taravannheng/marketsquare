import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { productReducer } from './product/product.reducer';
import { cartReducer } from './cart/cart.reducer';
import { orderReducer } from './order/order.reducer';
import persistConfig from './config/persist-config';

export const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);