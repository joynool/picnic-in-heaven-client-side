import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Service = () =>
{
    const [services, setServices] = useState([]);
    useEffect(() =>
    {
        fetch('https://shielded-river-19151.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="service" className="container">
            <h3 className="fw-light fs-1 text-success text-center m-5"><u>Our Services</u></h3>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Col key={service.key}>
                        <Card className="shadow">
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>
                                    {service.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="d-flex justify-content-between">
                                <Card.Text>
                                    Package Price: {service.price}
                                </Card.Text>
                                <Button variant="btn btn-dark">Book Now</Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Duration: {service.duration}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Service;