import React from 'react';
import './Element.css'

const Element = (props) => {
    console.log(props);
    const { picture, age, name, about, time } = props.element;
    return (
        <div className='each-element'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{about}</p>
            <p>For Age: {age}</p>
            <p>Time Required: {time}s</p>
        </div>
    );
};

export default Element;