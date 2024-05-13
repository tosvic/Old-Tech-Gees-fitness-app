import React from 'react';
import './Workout.css';
// import YogaImage from '/public/YogaImagebtn.jpg';


const WorkoutMain = () => {
    return (
        <div className="workout-container">
            <h1>Workouts</h1>

            <div className="workout-buttons">
                <button className='Button'>
                <img src={YogaImage} alt="Yoga" style={{ width: '50px', height: '50px' }} />
                    Yoga
                </button>
                <button className='Button'>
                    <img src={YogaImage} alt="Aerobics" style={{ width: '50px', height: '50px' }} />
                    Aerobics
                </button>
                <button className='Button'>
                    <img src={YogaImage} alt="Pilates" style={{ width: '50px', height: '50px' }}/>
                    Pilates
                </button>
            </div>


        </div>
    );
};

export default WorkoutMain;
