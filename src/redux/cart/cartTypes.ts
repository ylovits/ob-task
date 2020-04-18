import { ToggleCartHiddenAction, AddItemAction } from "./cartActions";

export const CartTypes = {
  TOGGLE_CART: "TOGGLE_CART",
  ADD_ITEM: "ADD_ITEM",
};

export type CartAction = ToggleCartHiddenAction | AddItemAction;
