import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, price, duration, img, _id } = props.service;
    return (
        <Col md={4} sm={6} xs={12} className='text-start mb-5'>
            <div className="service-card">
                <div className="service-img">
                    <img src={img} alt="ServiceImage" className='img-fluid package-img' />
                </div>
                <div className="service-title-details text-center">
                    <h3>{name}</h3>
                    <p>Duration: <span>{duration}</span></p>
                    <p>Price: <span>${price}</span></p>
                    <Link to={`/bookNow/${_id}`}>
                        <button>Book Now</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;