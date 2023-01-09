import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen} from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();

    const numItems = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount as='span'>{numItems}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;