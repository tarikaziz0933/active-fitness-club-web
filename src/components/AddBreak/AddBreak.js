import React from 'react';
import './AddBreak.css'

const AddBreak = () => {
    return (
        <div className='break-buttons'>
            <h2>Add A Break</h2>
            <div>
                <button className='button'>10s</button>
                <button className='button'>20s</button>
                <button className='button'>30s</button>
                <button className='button'>40s</button>
                <button className='button'>50s</button>
            </div>
        </div>
    );
};

export default AddBreak;