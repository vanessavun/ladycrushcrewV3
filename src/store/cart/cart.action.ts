import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

//Helper functions => no need withMatcher because they don't generate an action
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}; //product to add, category item with additional quantity

const removeItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingItem = cartItems.find((item) => item.id === productToRemove.id);

  //check if cart item is equal to 1 to remove from cartItems array
  //filter or keep the ones that are NOT the product to remove
  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

//Define each action as a type (bring in Action and Actionwithpayload)
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;
//The rest while different all return the same set cart action: createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

//Reducers
export const setIsCartOpen = withMatcher((boolean: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (carItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, carItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
) => {
  const newCartItems = clearItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
