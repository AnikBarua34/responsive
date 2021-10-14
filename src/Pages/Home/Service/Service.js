import React from 'react';
import './Service.css';

const Service = ({service}) => {
    console.log(service)
    const {name,price,img}  =service;
    return (
        <div className="service-main-div">
            <div className='service-container'>
                <img src={img} alt="" />
                <h3 className="name">Name: {name}</h3>
                <h4>{price}</h4>
            </div>
            
        </div>
    );
};

export default Service;