import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrderReview from './OrderReview';


const Order = () => {
    const [booking, setBooking] = useState([]);
    const { user } = useAuth();
    const { uid } = user;
    useEffect(() => {
        fetch(`https://frozen-gorge-80443.herokuapp.com/orders/${uid}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [uid])

    const handleRemove = key => {

        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://frozen-gorge-80443.herokuapp.com/orders/${key}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const newBooking = booking.filter(book => book._id !== key);
                        setBooking(newBooking);;
                    }
                });
        }

    }

    return (
        <div>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>ORDER LIST</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    {
                        booking.map(bookingDetails => <OrderReview bookingDetails={bookingDetails} key={bookingDetails._id} handleRemove={handleRemove}></OrderReview>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Order;

