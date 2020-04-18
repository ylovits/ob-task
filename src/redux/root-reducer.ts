import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";
import { CartState, ProductsState } from "./store";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
export interface RootState {
  cart: CartState;
  products: ProductsState;
}

const rootReducer = combineReducers<RootState>({
  cart: cartReducer,
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
