import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import { persistedReducer } from './root.reducer';

const middleWares: any = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);

export default store;