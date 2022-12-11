import React from 'react';
import './Element.css'

const Element = (props) => {
    const { handleDashboard } = props;
    const { picture, age, name, about, time } = props.element;
    return (
        <div className='each-element'>
            <img src={picture} alt="" />
            <div className='element-info'>
                <h3 className='element-name'>{name}</h3>
                <p>{about}</p>
                <p><small>For Age: {age}yrs</small></p>
                <p><small>Time Required: {time}s</small></p>
            </div>
            <button onClick={() => handleDashboard(props.element)} className='list-button'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Element;