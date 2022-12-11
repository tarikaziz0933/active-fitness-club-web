import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import './Accesories.css'
import profilePicture from '../../logo/Tarik_Pic.jpg'
import UserInfo from '../UserInfo/UserInfo';
import AddBreak from '../AddBreak/AddBreak';
import ExerciseDetail from '../ExerciseDetails/ExerciseDetail';
import { addBreakToLocalDB, addToLocalDB } from '../Utilities';

const Accesories = () => {
    const [elements, setElements] = useState([]);
    const [exerciseTime, setexerciseTime] = useState(0);
    const [breaktime, setBreaktime] = useState(0);

    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setElements(data))
    }, [])

    const handleDashboard = (element) => {
        addToLocalDB(element);

        const newExerciseTime = element.time;
        const totalTime = newExerciseTime + exerciseTime;
        setexerciseTime(totalTime);
    }
    const breakTime = (time) => {
        addBreakToLocalDB(time);
        let breaktime = time;
        setBreaktime(breaktime);
    }

    return (
        <div className='accesories-container'>
            <div>
                <h1>Select today's exercise</h1>
                <div className="accesories-elements">
                    {
                        elements.map(element => <Element
                            key={element.id}
                            element={element}
                            handleDashboard={handleDashboard}
                        ></Element>)
                    }
                </div>
            </div>
            <div className="exercise-time-summary">
                <UserInfo
                    profilePicture={profilePicture}
                ></UserInfo>
                <AddBreak
                    breakTime={breakTime}
                ></AddBreak>
                <ExerciseDetail
                    exerciseTime={exerciseTime}
                    breaktime={breaktime}
                ></ExerciseDetail>
                {/* <h4>Exersise Time: {exerciseTime}s</h4> */}
            </div>
        </div >
    );
};

export default Accesories;
// export { Accesories, breakTime }