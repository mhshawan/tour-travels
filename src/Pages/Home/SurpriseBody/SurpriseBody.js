import React from 'react';
import './SurpriseBody.css';
import surPriseImg from '../../../Images/The-Four-Principles-of-Health-Care-Ethics-for-Home-Care-Providers.jpg';
import ratingShape from '../../../Images/my-bg.png';
import { Col, Container, Row } from 'react-bootstrap';

const SurpriseBody = () => {
    return (
        <>
            <div className="surprise-body-section">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="surpise-body-img">
                                <img src={surPriseImg} className="img-fluid mt-4" alt="SURPRISEBODYIMG" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="surprise-body-details text-start">
                                <div className="surprise-heading">
                                    <h2><span style={{ color: ' #7dd6f6' }}>Search Your</span> Next Holidays</h2>
                                    <p>The rain that falls today, doesn’t fall tomorrow.- Dutch saying Well, I’m not sure about that proverb, because the forecast is for rain again tomorrow. Ah well, we are used to rain and at least we got a mostly sunny day yesterday. We started the day very early, as we both woke up basically in the middle of the night and couldn’t get back to sleep. It’s hard adjusting to the 9 hour time difference. Later we enjoyed a very lovely breakfast in our B&B. Katrien left us a tray with an assortment of breads and croissants, butter, jam, two different cheeses, boiled eggs, yogurt with fruit, sliced ham and roast beef, juice, and oranges.</p>
                                </div>
                                <div className="rating-area">
                                    <img src={ratingShape} alt="ratingshape" />
                                    <div className="rating-text d-flex">
                                        <h2>4.8</h2>
                                        <p>Travel Overall Rating Based on 4957 Reviews.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SurpriseBody;