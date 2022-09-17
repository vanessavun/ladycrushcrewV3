import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.componenent';
import './checkout.styles.scss';

const CheckOut = () => {
    const { cartItems, total } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <h1>Check Out</h1>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))}
            <span className='total'>Total: ${total}</span>
        </div>
    )
}

export default CheckOut;
