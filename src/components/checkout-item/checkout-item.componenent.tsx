import "./checkout-item.styles";

import { useDispatch, useSelector } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutSpan,
  CheckoutQuantitySpan,
  QuantityArrow,
  QuantityValue,
  RemoveButton,
} from "./checkout-item.styles";

import { CartItem } from "../../store/cart/cart.types.js";

type CheckoutItemProps = {
  cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
  );
};

export default CheckoutItem;
