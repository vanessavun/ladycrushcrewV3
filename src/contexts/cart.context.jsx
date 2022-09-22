import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

//Helper Function
const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    //if found, increment quantity
    const existingItem = cartItems.find(item =>
        item.id === productToAdd.id);
    if (existingItem) {
        return cartItems.map(item =>
            item.id === productToAdd.id ?
                { ...item, quantity: item.quantity + 1 } :
                item)
    }
    //return new array with modified cart items/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]
};
//Helper Function
const removeItem = (cartItems, productToRemove) => {
    //find the cart item to remove
    const existingItem = cartItems.find(item =>
        item.id === productToRemove.id);
    //check if cart item is equal to 1 to remove from cartItems array
    //filter or keep the ones that are NOT the product to remove
    if (existingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== productToRemove.id);
    }
    //return cartItems with reduced quantity
    return cartItems.map(item =>
        item.id === productToRemove.id ?
            { ...item, quantity: item.quantity - 1 } :
            item)
}
//Helper Function
const clearItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(item => item.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    numItems: 0,
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    total: 0,
});

const INITIAL_STATE = {
    cartItems: [],
    numItems: 0,
    total: 0,
    isCartOpen: false,
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'setCartItems',
    TOGGLE_CART: 'toggleCart'
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                isCartOpen: payload,
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {
    const [{ cartItems, numItems, total, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART, bool));
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);
        const newTotal = newCartItems.reduce(
            (total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { 
                cartItems: newCartItems, 
                numItems: newCartCount, 
                total: newTotal 
            }));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        numItems,
        removeItemFromCart,
        clearItemFromCart,
        total,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}