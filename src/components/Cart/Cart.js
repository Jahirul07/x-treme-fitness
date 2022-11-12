import React, { useState } from 'react';
import Photo from './photo.png'
import './Cart.css'
const Cart = (props) => {
    const [breakTime, setBreakTime] = useState(0)
    const breakTimeHandler = (time) =>{
        setBreakTime(time)
        localStorage.setItem('time-break', time)
    }
    const {cart} = props;
    let totalTime = 0;
    for(const exercise of cart){
        totalTime = totalTime + exercise.time;
    }
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
                    <div onClick={() => breakTimeHandler(10)}>10<small>s</small></div>
                    <div onClick={() => breakTimeHandler(20)}>20<small>s</small></div>
                    <div onClick={() => breakTimeHandler(30)}>30<small>s</small></div>
                    <div onClick={() => breakTimeHandler(40)}>40<small>s</small></div>
                    <div onClick={() => breakTimeHandler(50)}>50<small>s</small></div>
                </div>
            </div>
            <div className='exercise-details'>
                <h1 className='details-header'>Exercise Details</h1>
                <div className='details-exercise'>
                    <h3>Exercise time: {totalTime}</h3>
                </div>
                <div className='details-time'>
                    <h3>Break Time: {breakTime}</h3>
                </div>
            </div>
            <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;