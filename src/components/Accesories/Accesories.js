import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import './Accesories.css'
import profilePicture from '../../logo/Tarik_Pic.jpg'
import UserInfo from '../UserInfo/UserInfo';
import AddBreak from '../AddBreak/AddBreak';
import ExerciseDetail from '../ExerciseDetails/ExerciseDetail';
import { addBreakToLocalDB, addToLocalDB, getStoredTime } from '../Utilities';

const Accesories = () => {
    const [elements, setElements] = useState([]);
    const [exerciseTime, setexerciseTime] = useState(0);
    const [breaktime, setBreaktime] = useState(0);

    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setElements(data))
    }, [])
    // const newTime = 0;

    useEffect(() => {
        const storedTimeDB = getStoredTime();
        let finalTime = 0;
        // console.log(storedTimeDB);
        for (const id in storedTimeDB) {
            const addedElement = elements.find(element => element.id === id);
            if (addedElement) {
                const round = storedTimeDB[id];
                // addedElement.round = round;
                finalTime = finalTime + addedElement.time * round;

                // console.log(addedElement);
            }
        }
        setexerciseTime(finalTime);

    }, [elements])

    const handleDashboard = (element) => {
        addToLocalDB(element.id);

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