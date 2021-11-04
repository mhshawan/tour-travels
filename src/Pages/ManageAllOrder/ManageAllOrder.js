import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewAllBooking from './ReviewAllBooking';

const ManageAllOrder = () => {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-gorge-80443.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);
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

    };
    const handleApproveStatus = key => {
        const url = `https://frozen-gorge-80443.herokuapp.com/orders/${key}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Booking Updated Successfully');
                    // For Refreshing Page
                    window.location.reload();
                }
            })
    }
    return (
        <div>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>ALL ORDERS</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="mt-5">
                <Row>
                    {
                        booking.map(bookingDetails => <ReviewAllBooking bookingDetails={bookingDetails} key={bookingDetails._id} handleRemove={handleRemove} handleApproveStatus={handleApproveStatus}></ReviewAllBooking>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrder;
