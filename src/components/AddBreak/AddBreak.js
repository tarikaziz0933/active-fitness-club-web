import React from 'react';
import './AddBreak.css'

const AddBreak = (props) => {
    const { breakTime } = props;
    return (
        <div className='break-buttons'>
            <h2>Add A Break</h2>
            <div>
                <button onClick={() => breakTime(10)} className='button'>10s</button>
                <button onClick={() => breakTime(20)} className='button'>20s</button>
                <button onClick={() => breakTime(30)} className='button'>30s</button>
                <button onClick={() => breakTime(40)} className='button'>40s</button>
                <button onClick={() => breakTime(50)} className='button'>50s</button>
            </div>
        </div>
    );
};

export default AddBreak;