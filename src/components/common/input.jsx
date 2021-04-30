import React from 'react';

const Input = ({ name, label, active, placeholderText, ...rest }) => {
    return (
        <div className='form-group'>
            <label
                className={active ? 'floating-label' : ''}
                htmlFor={name}
            >
                {label}
            </label>
            <input
                {...rest}
                className='form-control'
                name={name}
                id={name}
                type='text'
                placeholder={active ? placeholderText : ""}
            />
        </div>
    );
}

export default Input;