import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

import { ProductInterface } from "../utils/fakeapi";

export interface ProductsState {
  items: ProductInterface[];
  filteredItems: ProductInterface[];
  size: string;
  color: string;
}

export interface CartState {
  hidden: boolean;
  cartItems: ProductInterface[];
  count: number;
}

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
