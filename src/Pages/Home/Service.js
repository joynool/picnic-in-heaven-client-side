import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*------------------------------------------------------------------
            All Services display section from mongodb
--------------------------------------------------------------------*/
const Service = () =>
{
    const [services, setServices] = useState([]);

    //Load all service data from mongodb
    useEffect(() =>
    {
        fetch('https://shielded-river-19151.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div id="service" className="container">
            <h3 className="fw-light fs-1 text-success text-center m-5"><u>Our Services</u></h3>
            {
                (services.length === 0) ?
                    <div className="d-flex justify-content-center align-items-center m-5">
                        <Spinner animation="border" variant="success" />
                    </div> :
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service => <Col key={service._id}>
                                <Card className="shadow">
                                    <Card.Img variant="top" src={service.img} alt="Service Image" />
                                    <Card.Body>
                                        <Card.Title className="fw-light fs-3">{service.name}</Card.Title>
                                        <Card.Text className="text-muted">
                                            {service.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body className="d-flex justify-content-between">
                                        <Card.Text>
                                            Package Price: {service.price} (two person)
                                        </Card.Text>
                                        <Button as={Link} to={`/order-place/${service._id}`} variant="btn btn-dark">Book Now</Button>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Duration: {service.duration}</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            )
                        }
                    </Row>
            }
        </div>
    );
};

export default Service;