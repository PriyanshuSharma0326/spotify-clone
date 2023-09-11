import React from 'react';
import './button.style.scss';

function Button({ buttonText, buttonType, type, ...otherProps }) {
    const BUTTON_TYPE_CLASS = {
        big: 'big',
        noPadding: 'no-padding',
        noPaddingSmall: 'no-padding-small',
    }

    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`} 
            type={type} 
            {...otherProps} 
        >
            {buttonText}
        </button>
    )
}

export default Button;
