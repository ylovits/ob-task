import { ProductInterface } from "../../utils/fakeapi";

export const addToCart = (
  cartItems: ProductInterface[],
  addedItem: ProductInterface
) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === addedItem.id
  );
  if (!existingItem) {
    return [...cartItems, { ...addedItem }];
  } else {
    return [...cartItems];
  }
};

export const addToCount = (
  count: number,
  cartItems: ProductInterface[],
  addedItem: ProductInterface
) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === addedItem.id
  );
  if (!existingItem) {
    return count + 1;
  } else {
    return count;
  }
};
