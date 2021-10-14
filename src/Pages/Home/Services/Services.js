import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [allServices,setAllServices] = useState([]);

    useEffect(()=>{
        fetch('./Services.JSON')
        .then(res => res.json())
        .then(data =>setAllServices(data))
    },[])
    return (
        <div>
            <h3 className="text-danger m-5">Total Courses : {allServices.length}</h3>
            <div className="services-container">
            
            {
                allServices.map(service => <Service key={service.name} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;