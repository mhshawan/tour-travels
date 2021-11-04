import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const OrderReview = (props) => {
    const { order, orderStatus, _id } = props.bookingDetails;
    const { handleRemove } = props;
    console.log(order)
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner className='my-3' animation="grow" variant="info" />;
    }
    return (
        <>
        <Col xs={6} md={4} className='text-start mb-5 mt-5'>
            <div className="service-card">
                <div className="service-img">
                    <img src={order.img} alt="ServiceImage" className='img-fluid' />
                </div>
                <div className="service-title-details text-center">
                    <h3>{order.name}</h3>
                    <p>Duration: <span>{order.duration}</span></p>
                    <p>Price: <span>{order.price}</span></p>
                    <p>Status: <span>{orderStatus}</span></p>
                    <button onClick={()=>handleRemove(_id)}>Delete</button>
                </div>
            </div>
        </Col>
        
        </>
    );
};

export default OrderReview;