import React from 'react';
import Photo from './photo.png'
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart'>
            <div className='personal-info'>
                <div className='personal-image'>
                    <img src={Photo} alt="" />
                </div>
                <div className='body-info'>
                    <h4>jahirul Islam</h4>
                    <p>Dhaka Bangladesh</p>
                </div>
            </div>
            <div className='break'>

            </div>
            <div className='exercise-details'>

            </div>
        </div>
    );
};

export default Cart;