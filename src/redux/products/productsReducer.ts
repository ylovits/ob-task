import { ProductsTypes } from "./productsTypes";
import { ProductsObject } from "../../utils/fakeapi";
import { ProductsState } from "../store";

const initialState = {
  items: ProductsObject,
  filteredItems: ProductsObject,
  size: "",
  color: "",
};

const productsReducer = (state: ProductsState = initialState, action: any) => {
  switch (action.type) {
    case ProductsTypes.FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    case ProductsTypes.FILTER_PRODUCTS_BY_COLOR:
      return {
        ...state,
        color: action.payload,
        filteredItems:
          action.payload === ""
            ? [...ProductsObject]
            : ProductsObject.filter((a) => a.color === action.payload),
      };
    case ProductsTypes.FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload,
        filteredItems:
          action.payload === ""
            ? [...ProductsObject]
            : ProductsObject.filter((a) => a.size === action.payload),
      };
    default:
      return state;
  }
};

export default productsReducer;
