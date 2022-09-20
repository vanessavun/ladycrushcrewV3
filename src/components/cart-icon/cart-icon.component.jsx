import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, numItems } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleIsCartOpen} />
            <ItemCount as='span'>{numItems}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;