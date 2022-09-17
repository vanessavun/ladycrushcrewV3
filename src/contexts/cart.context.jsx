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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    numItems: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [numItems, setNumItems] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);
        setNumItems(newCartCount);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
        // setNumItems(numItems+1);
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, numItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}