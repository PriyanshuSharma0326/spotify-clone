import React from 'react';
import './form-input.style.scss';

function FormInput({ labelText, inputType, inputOptions, errorText }) {
    return (
        <div className='form-group'>
            <label htmlFor={inputOptions.id} className='form-input-label'>
                {labelText}
            </label>

            {inputType === 'text' && <input className='form-input' {...inputOptions} />}

            {errorText && <p className='error-text'>{errorText}</p>}
        </div>
    );
}

export default FormInput;
