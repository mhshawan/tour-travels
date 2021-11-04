import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slideOne from '../../../Images/carousel/slide-01.jpg';
import slideTwo from '../../../Images/carousel/slide-02.jpg';
import slideThree from '../../../Images/carousel/slide-03.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item className="carousel-img">
                    <img
                        className="d-block w-100 slide-img"
                        src={slideOne}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-img">
                    <img
                        className="d-block w-100 slide-img"
                        src={slideTwo}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-img">
                    <img
                        className="d-block w-100 slide-img"
                        src={slideThree}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;