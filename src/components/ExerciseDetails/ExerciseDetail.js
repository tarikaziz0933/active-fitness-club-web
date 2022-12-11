import React from 'react';
import './ExerciseDetail.css'

const ExerciseDetail = (props) => {
    return (
        <div>
            <h2>Exercise Details</h2>
            <h4 className='exerciseTime'>Exercise time: {props.exerciseTime}s</h4>
            <h4 className='break-time'>Break time: {props.breaktime}s</h4>
        </div>
    );
};

export default ExerciseDetail;