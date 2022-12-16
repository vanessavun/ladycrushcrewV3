import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.componenent';
import PaymentForm from '../../components/payment-form/payment-form.component';

import './checkout.styles.scss';

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

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
            <PaymentForm />
        </div>
    )
}

export default CheckOut;
