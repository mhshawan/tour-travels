import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const addIcon = <FontAwesomeIcon icon={faMapMarker} />
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phnIcon = <FontAwesomeIcon icon={faPhone} />
    return (
        <>
            <footer>
                <div className='foot'>
                    <Container>
                        <Row>
                            <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                                <div className="foot-title">
                                    <h2>About us</h2>
                                </div>
                                <div className="foot-detail-1">
                                    <p>Travel official tourism website showcases all of the above while offering more specific travel information about the country’s climate, landscapes, urban sectors, and entertainment opportunities.</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                                <div className="foot-title">
                                    <h2>Quick links</h2>
                                </div>
                                <Navbar variant="light" className="responsive-fix">
                                    <Nav className="d-block foot-nav-menu">
                                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                                        <Nav.Link as={Link} to="/specialist">Our Service</Nav.Link>
                                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                    </Nav>
                                </Navbar>
                            </Col>
                            <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                                <div className="foot-title">
                                    <h2>Our services</h2>
                                </div>
                                <ul className="foot-detail-3">
                                    <li>Tour Package</li>
                                    <li>Best Tour Guide</li>
                                    <li>Personal Vehicle</li>
                                    <li>Guide Solution</li>
                                </ul>
                            </Col>
                            <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                                <div className="foot-title">
                                    <h2>Contact info</h2>
                                </div>
                                <ul className="foot-detail-4">
                                    <li>{addIcon} Travel arkansas 10004 United states</li>
                                    <li>{envIcon} info@travel.com</li>
                                    <li>{phnIcon} +123 - 765 - 7645</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer-credit p-3">
                    <Container>
                        <h6>© Copyright 2021. Made by MH Shawan</h6>
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default Footer;