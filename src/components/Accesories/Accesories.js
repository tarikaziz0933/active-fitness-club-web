import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import './Accesories.css'
import profilePicture from '../../logo/Tarik_Pic.jpg'
import UserInfo from '../UserInfo/UserInfo';
import AddBreak from '../AddBreak/AddBreak';
import ExerciseDetail from '../ExerciseDetails/ExerciseDetail';

const Accesories = () => {
    const [elements, setElements] = useState([]);
    const [exerciseTime, setexerciseTime] = useState(0);

    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setElements(data))
    }, [])

    const handleDashboard = (element) => {
        const newExerciseTime = element.time;
        const totalTime = newExerciseTime + exerciseTime;
        setexerciseTime(totalTime);
    }
    const breakTime = () => {
        let breakTime = 5;
    }

    return (
        <div className='accesories-container'>
            <div className="accesories-elements">
                {
                    elements.map(element => <Element
                        key={element.id}
                        element={element}
                        handleDashboard={handleDashboard}
                    ></Element>)
                }
            </div>
            <div className="exercise-time">
                <UserInfo
                    profilePicture={profilePicture}
                ></UserInfo>
                <AddBreak
                    Accesories={Accesories}
                ></AddBreak>
                <ExerciseDetail
                    exerciseTime={exerciseTime}
                    breakTime={breakTime}
                ></ExerciseDetail>
                {/* <h4>Exersise Time: {exerciseTime}s</h4> */}
            </div>
        </div >
    );
};

// export default Accesories;
export { Accesories, breakTime }