import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddPackage.css';

const AddPackage = () => {
    // Using Hook Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch(`https://frozen-gorge-80443.herokuapp.com/packages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('A New Package Has Been Added Successfully!!');
                    reset();
                }
            })
    }
    return (
        <>
            <div>
                <div className="common-banner">
                    <Container>
                        <Row>
                            <Col md={12} sm={12} xs={12}>
                                <div className="section-title">
                                    <h2>Add Package</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="book-now-bg pt-5 pb-5">
                <Container>
                    <h2 className="book-now-title pb-3">Please Add a Service</h2>
                    <form className="book-now-form mx-auto w-50 mb-2 pt-5" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("packageName", { required: true, maxLength: 20 })} placeholder="packageName" />
                        <input type="number" {...register("price")} placeholder="price" />
                        <input type="text" {...register("location")} placeholder="location" />
                        <input type="text" {...register("duration")} placeholder="duration" />
                        <input {...register("imgUrl")} placeholder="imgUrl" />
                        <input type="submit" className="book-now-btn" />
                    </form>
                </Container>
            </div>
        </>
    );
};

export default AddPackage;