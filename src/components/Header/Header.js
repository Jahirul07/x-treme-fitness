import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <p>X-Trem Fitness</p>
            <div className='menu'>
                <a href="/shop">Home</a>
                <a href="/orders">Services</a>
                <a href="/invertory">About Us</a>
                <a href="/about">Contact Us</a>
            </div>
        </nav>
    );
};

export default Header;