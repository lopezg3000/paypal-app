import React from 'react';
import './navbar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <a className='logo'>
                    <i class="fab fa-paypal icon"></i>
                </a>
                <nav className='links-container'>
                    <h1 >Wallet</h1>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;