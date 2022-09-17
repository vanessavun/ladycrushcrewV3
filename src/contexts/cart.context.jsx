import { useEffect } from "react";
import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
        //if found, increment quantity
    const existingItem = cartItems.find(item =>
        item.id === productToAdd.id);
    if(existingItem){
        return cartItems.map(item =>
            item.id === productToAdd.id ?
            {...item, quantity: item.quantity + 1} :
            item)
    }
    //return new array with modified cart items/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}]
};

const removeItem = (cartItems, productToRemove) => {
    //find the cart item to remove
    const existingItem = cartItems.find(item =>
        item.id === productToRemove.id);
    //check if cart item is equal to 1 to remove from cartItems array
    //filter or keep the ones that are NOT the product to remove
    if(existingItem.quantity === 1){
        return cartItems.filter(item => item.id !== productToRemove.id);
    }
    //return cartItems with reduced quantity
    return cartItems.map(item =>
        item.id === productToRemove.id ?
        {...item, quantity: item.quantity - 1} :
        item)
}

const clearItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(item => item.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    numItems: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    total: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [numItems, setNumItems] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);
        setNumItems(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newTotal = cartItems.reduce(
            (total, cartItem) => total + (cartItem.quantity*cartItem.price), 0);
        setTotal(newTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearItem(cartItems, cartItemToClear));
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