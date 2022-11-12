import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Workout from '../Workout/Workout';
import './Workouts.css'

const Service = () => {
    const [exercises, setExercises] = useState([])
    useState( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])
    return (
        <div className='service-container'>
            <div className="workout-container">
                {
                    exercises.map(exercise => <Workout key={exercise.id} exercise={exercise}></Workout>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Service;