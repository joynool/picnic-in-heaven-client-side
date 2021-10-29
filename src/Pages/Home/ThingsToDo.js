import React from 'react';
import ttd_one from './../../images/thingsToDo/ttd_one.jpg';
import ttd_two from './../../images/thingsToDo/ttd_two.jpg';
import ttd_three from './../../images/thingsToDo/ttd_three.jpg';
import { Col, Container, Image, Row } from 'react-bootstrap';

const ThingsToDo = () =>
{
    return (
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <Image src={ttd_one} fluid />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={ttd_two} fluid />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={ttd_three} fluid />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <Image src={ttd_one} fluid />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={ttd_two} fluid />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={ttd_three} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default ThingsToDo;