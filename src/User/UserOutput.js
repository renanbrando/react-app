import React from 'react';
import './User.css';

const userOutput = (props) => {
    return (
        <div>
            <p>My name is</p>
            <p className="label info">{props.name}</p>
        </div>
    );
}

export default userOutput;