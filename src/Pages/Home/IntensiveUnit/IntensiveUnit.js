import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import intensiveImg from '../../../Images/urgent-care-vs-emergency-room.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './IntensiveUnit.css';

const IntensiveUnit = () => {
    // Font Awesome ICONS
    const phonIcon = <FontAwesomeIcon icon={faPhone} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <>
            {/* Intensive Care Area */}
            <div className="intensive-care-section">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="intensive-care-img">
                                <img src={intensiveImg} className='img-fluid mt-4' alt="ICUIMG" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="intensive-care-details text-start">
                                <h2><span style={{ color: ' #7dd6f6' }}>OUR PROPOSALS
                                </span> and <span style={{ color: ' #7dd6f6' }}>Creative</span> Travel Agency</h2>
                                <p>If you’re looking for exposure to a true winter wonderland, you’ll be hard-pressed to find a better place than Finland for its bright Northern Lights and historical relation to the real Santa Claus. Travel official tourism website showcases all of the above while offering more specific travel information about the country’s climate, landscapes, urban sectors, and entertainment opportunities. 
                                </p>
                            </div>
                            <div className="emergency-contact text-start">
                                <div className="emergency-one d-flex">
                                    <div className="em-icon-1">
                                        {phonIcon}
                                    </div>
                                    <div className="em-details-1">
                                        <h4>Direct Call</h4>
                                        <p>+123 - 765-7645</p>
                                    </div>
                                </div>
                                <div className="emergency-two d-flex">
                                    <div className="em-icon-2">
                                        {mailIcon}
                                    </div>
                                    <div className="em-details-2">
                                        <h4>Mail Us</h4>
                                        <p>info@medicit.com</p>
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

export default IntensiveUnit;