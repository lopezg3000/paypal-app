import React from 'react'
import { Link } from 'react-router-dom';
import '../common/button.css';

const Button = ({ text, linkPath }) => {
    return (
        <Link to={linkPath} className='btn'>
            {text}
        </Link>
    );
}

export default Button;