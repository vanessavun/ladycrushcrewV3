import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropDown = () => { 

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>CHECK OUT</Button>
        </div>
    )

}

export default CartDropDown;