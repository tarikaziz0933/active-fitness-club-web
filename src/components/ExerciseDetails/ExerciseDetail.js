import React from 'react';

const ExerciseDetail = (props) => {
    return (
        <div>
            <h2>Exercise Details</h2>
            <h4>Exercise time: {props.exerciseTime}</h4>
            <h4>Break time: {props.breakTime}</h4>
        </div>
    );
};

export default ExerciseDetail;