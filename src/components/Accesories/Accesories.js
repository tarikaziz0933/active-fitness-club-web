import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import './Accesories.css'

const Accesories = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setElements(data))
    }, [])
    return (
        <div className='accesories-container'>
            <div className="accesories-elements">
                {
                    elements.map(element => <Element
                        key={element.id}
                        element={element}
                    ></Element>)
                }
            </div>
            <div className="exercise-time">
                <h3>Md. Tarikul Aziz</h3>
            </div>
        </div >
    );
};

export default Accesories;