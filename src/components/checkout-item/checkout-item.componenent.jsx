import './checkout-item.styles.jsx';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer,
        ImageContainer,
        CheckoutSpan,
        CheckoutQuantitySpan,
        QuantityArrow,
        QuantityValue,
        RemoveButton, } from './checkout-item.styles.jsx';

const CheckoutItem = ( {cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <CheckoutSpan>{name}</CheckoutSpan>
            <CheckoutQuantitySpan>
                <QuantityArrow onClick={removeItemHandler}>&#45;</QuantityArrow>
                    <QuantityValue>{quantity}</QuantityValue>
                <QuantityArrow onClick={addItemHandler}>&#43;</QuantityArrow>
            </CheckoutQuantitySpan>
            <CheckoutSpan>${price}</CheckoutSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;