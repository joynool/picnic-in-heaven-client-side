import React from 'react';
import ttd_one from './../../images/thingsToDo/ttd_one.jpg';
import ttd_two from './../../images/thingsToDo/ttd_two.jpg';
import ttd_three from './../../images/thingsToDo/ttd_three.jpg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ThingsToDo = () =>
{
    return (
        <div id="things-to-do">
            <div className="text-center m-5">
                <h3 className="fw-light fs-1 text-success"><u>Things to do</u></h3>
                <small className="fs-2 fw-light">
                    <FaQuoteLeft /> DISCOVER Hill Picnic Experience in Bangladesh <FaQuoteRight />
                </small>
            </div>
            <Container className="text-center border rounded shadow p-4">
                <Row>
                    <Col xs={12} md={4}>
                        <Image src={ttd_one} rounded fluid />
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="pt-5">
                            <h2 className="text-success fst-italic">Day 1</h2>
                            <h3 className="fw-light">Stay in The hut</h3>
                            <p className="text-muted">Great Walk Huts are the most comfortable. They have mattresses, water supply, toilets, hand washing facilities and heating with fuel available. They may have solar lighting, cooking facilities with fuel and a hut warden.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image src={ttd_two} rounded fluid />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="pt-5">
                            <h2 className="text-success fst-italic">Day 2</h2>
                            <h3 className="fw-light">Attend local cultural festival</h3>
                            <p className="text-muted">Local festivals are a great way to make memories with your loved ones. Some of the most resonant memories that we have are made in our hometown or where we grow up. From photos to laughter, the experience that you and your friends or family get from attending will be second to nothing else in the world</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image src={ttd_three} rounded fluid />
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="pt-5">
                            <h2 className="text-success fst-italic">Day 3</h2>
                            <h3 className="fw-light">A night with River</h3>
                            <p className="text-muted">Make new memories with a night with Rivers picnic area in a beautiful, natural setting. All sites have picnic tables, and most sites have other basic amenities including water fountains and permanent grills. Look for a peaceful, serene location or set up just steps from a rip-roaring play area. Come find your favorite spot.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ThingsToDo;