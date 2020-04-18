import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector(
  [selectCart],
  (cart) => cart.count
);
