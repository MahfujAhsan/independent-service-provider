import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Service = ({ service }) => {
    const { _id, name, price, img, details } = service;
    const text = details;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div>
            <div className='service-container'>
                <img src={img} alt="" />
                <h6>{name}</h6>
                <p><small className='price'>Price:</small>${price}</p>
            </div>
            <div>
                <p className='details-info'>{isReadMore ? text.slice(0, 200) : text}
                    <span onClick={toggleReadMore} className="read-or-hide">
                        {isReadMore ? "...Read More" : "Show Less"}
                    </span>
                </p>
            </div>
            <Link to="checkout">
                <button className='checkout-btn'><FontAwesomeIcon className='info-icon' icon={faCircleInfo}></FontAwesomeIcon>More Details</button>
            </Link>
        </div>
    );
};

export default Service;