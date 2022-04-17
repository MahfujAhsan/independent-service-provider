import React from 'react';
import "./LoadingSpinner.css"

const LoadingSpinner = () => {
    return (
        <div className='spinner-container'>
            <div className="loading-spinner">
                <span></span>
            </div>
        </div>
    );
};

export default LoadingSpinner;