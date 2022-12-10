import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import './Accesories.css'
import profilePicture from '../../logo/Tarik_Pic.jpg'

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
                <div className='profile'>
                    <img src={profilePicture} alt="" />
                    <h3>Md. Tarikul Aziz</h3>
                </div>
                <h4>Exersise Time: {exerciseTime}s</h4>
            </div>
        </div >
    );
};

export default Accesories;