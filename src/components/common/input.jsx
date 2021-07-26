import React from 'react';

const Input = ({ name, label, active, placeholderText, error, ...rest }) => {
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
            {error && <div>{error}</div>}
        </div>
    );
}

export default Input;