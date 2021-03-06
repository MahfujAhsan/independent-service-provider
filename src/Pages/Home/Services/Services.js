import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('properties-data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h1 className='service-title'>Our Properties</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;