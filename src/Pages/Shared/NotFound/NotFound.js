import React from 'react';
import "./NotFound.css";
import error from "../../../media/images/404.png"

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;