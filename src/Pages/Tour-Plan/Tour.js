import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Tour.css';
import specialist from '../../Images/carousel/slide-01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrain, faGlobeAmericas, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const Tour = () => {
    const trainIcon = <FontAwesomeIcon icon={faTrain} />
    const planeIcon = <FontAwesomeIcon icon={faPlane} />
    const globeIcon = <FontAwesomeIcon icon={faGlobeAmericas} />
    const europeIcon = <FontAwesomeIcon icon={faGlobeEurope} />
    return (
        <div>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>TOUR PLAN</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="special-top">
            <Container className="pt-5 pb-5">
                <Row>
                    <Col xs={12} md={6} className="special-pera">
                        <div className="holistically">
                            <h2 className="mb-3">Interesting Facts About Paris</h2>
                            <p>Thomas Jefferson once said “a walk about Paris will provide lessons in history, beauty, and in the point of life.”

                                There’s a reason Paris is one of the most popular cities among travelers. Known as the “City of Light” or the “City of Love,” the streets of Paris overflow with culture, art, beauty, and history. Whether searching out Monet’s Water Lilies at Musée de l’Orangerie, climbing the many steps of Sacré-Cœur, standing before the Eiffel Tower in awe, or searching out the best crepes along the Seine, Paris is a city that captures the hearts of millions ever year.

                                Believe it or not though, Paris wasn’t always called “Paris,” and the Eiffel Tower wasn’t supposed to be a permanent fixture. Here are 10 interesting facts about Paris.

                                The Eiffel Tower was supposed to be a temporary installation, intended to stand for 20 years after being built for the 1889 World Fair.
                                Paris was originally a Roman City called “Lutetia.”
                                It’s believed that Paris only has one stop sign in the entire city.
                                A flat in Paris was left unoccupied under lock and key for 70 years, but the rent was paid every month; when the renter passed away, a painting by Boldini valued at more than $2 million was found inside.
                                There are at least three replicas of the Statue of Liberty in Paris. The most famous of them exists on an island in the middle of the Seine and looks towards her sister statue in New York.
                                </p>

                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={specialist} alt="" />
                    </Col>
                </Row>
            </Container>
            </div>

            <Container className='my-5'>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-1">
                                {globeIcon}
                            </div>
                            <div className="feature pt-2 pb-4">
                                <h3 className="pb-3">Tour Reasearch
                                </h3>
                                <p>Travel is one of the renowned travel agency for tour guide and travel all in world.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-2">
                                {planeIcon}
                            </div>
                            <div className="feature pt-2 pb-4">
                                <h3 className="pb-3">Visa Services</h3>
                                <p>All kind of visa are here for you, we are open 24/7 you can always get our help and stay safe.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-1">
                                {trainIcon}
                            </div>
                            <div className="feature pt-2 pb-4">
                                <h3 className="pb-3">Ticket Booking</h3>
                                <p>Most low cost ticket here. Our concern for your safety and trust relief also.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-2">
                                {europeIcon}
                            </div>
                            <div className="feature pt-2 pb-4">
                                <h3 className="pb-3">Travel Guide</h3>
                                <p>Most experienced travel guide are here for you they are very much dedicated to all travellers.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="specialist-contact py-5">
                <Container>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/fY_T6urY2Y4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Container>
            </div>
        </div>
    );
};

export default Tour;