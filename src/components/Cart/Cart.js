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
            <div className='body-structure'>
                <div>
                    <p>55<small>kg</small></p>
                    <p>Weight</p>
                </div>
                <div>
                <p>5.6</p>
                <p>Height</p>
                </div>
                <div>
                <p>20<small>yr</small></p>
                <p>Age</p>
                </div>
            </div>
            <div className='break'>
                <h1>Add A Break</h1>
                <div className='break-btn'>
                    <div>10<small>s</small></div>
                    <div>20<small>s</small></div>
                    <div>30<small>s</small></div>
                    <div>40<small>s</small></div>
                    <div>50<small>s</small></div>
                </div>
            </div>
            <div className='exercise-details'>
                <h1 className='details-header'>Exercise Details</h1>
                <div className='details-exercise'>
                    <h3>Exercise time: </h3>
                </div>
                <div className='details-time'>
                    <h3>Break Time: </h3>
                </div>
            </div>
            <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;