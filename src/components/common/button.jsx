import React from 'react'
import '../common/button.css';

const Button = ({ text }) => {
    return (
        <a href='#' className='btn'>
            {text}
        </a>
    );
}

export default Button;