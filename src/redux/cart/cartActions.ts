import { CartTypes } from "./cartTypes";
import { ProductInterface } from "../../utils/fakeapi";

export interface ToggleCartHiddenAction {
  type: string;
  payload?: any;
}

export interface AddItemAction {
  type: string;
  payload: ProductInterface;
}

export const toggleCartHidden = (): ToggleCartHiddenAction => {
  return {
    type: CartTypes.TOGGLE_CART,
  };
};

export const addItem = (item: ProductInterface): AddItemAction => {
  return { type: CartTypes.ADD_ITEM, payload: item };
};
