import './button.styles.scss';

/* Styling
default, inverted (for shopping), google sign in
*/

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button 
            className={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''}`} 
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;