import { CartTypes, CartAction } from "./cartTypes";
import { addToCart, addToCount } from "./cartUtils";
import { CartState } from "../store";

const initialState = {
  hidden: true,
  cartItems: [],
  count: 0,
};

const cartReducer = (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
        count: addToCount(state.count, state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
