import React from 'react';
import './UserInfo.css'

const UserInfo = (props) => {
    return (
        <div>
            <div className='profile'>
                <img src={props.profilePicture} alt="" />
                <h3>Md. Tarikul Aziz</h3>
            </div>
            <div className='personal-info'>
                <div>
                    <h4>64 <small>kg</small></h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>6.2</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>25 <small>yrs</small></h4>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;