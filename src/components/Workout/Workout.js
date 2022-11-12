import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const {name, picture, age, time} = props.exercise;
    return (
        <div className='workout'>
            <img src={picture} alt="" />
            <div className='workout-info'>
                <h2>{name}</h2>
                <h3>Age: {age}</h3>
                <h3>Time required: {time}s</h3>
            </div>
            <button onClick={() => props.handleAddToCart(props.exercise)} className='btn-cart'>Add to List</button>
        </div>
    );
};

export default Workout;