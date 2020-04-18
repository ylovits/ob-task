import { ProductsTypes } from "./productsTypes";
import { ProductsObject, ProductInterface } from "../../utils/fakeapi";

export interface FetchProductsAction {
  type: typeof ProductsTypes.FETCH_PRODUCTS;
  payload: ProductInterface[];
}
export interface ProductsByColorAction {
  type: typeof ProductsTypes.FILTER_PRODUCTS_BY_COLOR;
  payload: string;
}
export interface ProductsBySizeAction {
  type: typeof ProductsTypes.FILTER_PRODUCTS_BY_SIZE;
  payload: string;
}

export type ProductAction =
  | ProductsByColorAction
  | ProductsBySizeAction
  | FetchProductsAction;

export const fetchProducts = (): FetchProductsAction => {
  return {
    type: ProductsTypes.FETCH_PRODUCTS,
    payload: ProductsObject,
  };
};

export const productsByColor = (color: string): ProductsByColorAction => {
  return {
    type: ProductsTypes.FILTER_PRODUCTS_BY_COLOR,
    payload: color,
  };
};

export const productsBySize = (size: string): ProductsBySizeAction => {
  return {
    type: ProductsTypes.FILTER_PRODUCTS_BY_SIZE,
    payload: size,
  };
};
