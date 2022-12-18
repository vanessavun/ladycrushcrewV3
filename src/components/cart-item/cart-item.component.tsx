import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { FC } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
    cartItem: TCartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;