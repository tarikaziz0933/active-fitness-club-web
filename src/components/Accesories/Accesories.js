import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import './Accesories.css'
import profilePicture from '../../logo/Tarik_Pic.jpg'
import UserInfo from '../UserInfo/UserInfo';
import AddBreak from '../AddBreak/AddBreak';
import ExerciseDetail from '../ExerciseDetails/ExerciseDetail';
import { addBreakToLocalDB, addToLocalDB, getBreakTime, getStoredTime } from '../Utilities';

const Accesories = () => {
    const [elements, setElements] = useState([]);
    const [exerciseTime, setexerciseTime] = useState(0);
    const [breaktime, setBreaktime] = useState(0);
    console.log(breaktime);

    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setElements(data))
    }, [])
    // const newTime = 0;

    useEffect(() => {
        const storedTimeDB = getStoredTime();
        // console.log(storedTimeDB);
        let finalTime = 0;
        for (const id in storedTimeDB) {
            const addedElement = elements.find(element => element.id === id);
            if (addedElement) {
                const round = storedTimeDB[id];
                finalTime = finalTime + addedElement.time * round;
            }
        }
        setexerciseTime(finalTime);
    }, [elements])

    useEffect(() => {
        const storedBreakTimeDB = getBreakTime();
        // console.log(storedBreakTimeDB.time);
        let finalBreakTime = storedBreakTimeDB.time;
        setBreaktime(finalBreakTime);

    }, [])

    const handleDashboard = (element) => {
        addToLocalDB(element.id);

        const newExerciseTime = element.time;
        const totalTime = newExerciseTime + exerciseTime;
        setexerciseTime(totalTime);
    }
    const hundleBreakTime = (time) => {
        addBreakToLocalDB(time);
        let breaktime1 = time;
        setBreaktime(breaktime1);
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
                    hundleBreakTime={hundleBreakTime}
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