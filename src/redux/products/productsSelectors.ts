import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

export const selectProducts = (state: RootState) => state.products;

export const selectProductsItems = createSelector(
  [selectProducts],
  (products) => products.filteredItems || products.items
);
