import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCar, FaCompass, FaHotel, FaIdCardAlt } from "react-icons/fa";

/*------------------------------------------------------------------
            Facilities section to show some feature
--------------------------------------------------------------------*/
const Facilities = () =>
{
    return (
        <>
            <h3 className="fw-light fs-1 text-success text-center m-5"><u>Our Facilities</u></h3>
            <Container className="text-center border rounded shadow p-4 mb-5">
                <Row>
                    <Col xs={12} md={3}>
                        <div className="border rounded mb-2 p-2 shadow-sm">
                            <FaIdCardAlt style={{ fontSize: '100px', color: 'green' }} />
                            <h3 className="fw-light">Authentic Picnic Booking Company in Bangladesh</h3>
                            <p className="text-muted">We are registered Picnic booking operator in Bangladesh and registered as Member of TOAB (Tour Operator Association of Bangladesh).</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="border rounded mb-2 p-2 shadow-sm">
                            <FaHotel style={{ fontSize: '100px', color: 'green' }} />
                            <h3 className="fw-light">Hotel Booking in Bangladesh</h3>
                            <p className="text-muted">We provide booking services in Hotels in Dhaka and all over Bangladesh. As booking agency, we do have agreements with Hotels and Resorts all over Bangladesh.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="border rounded mb-2 p-2 shadow-sm">
                            <FaCar style={{ fontSize: '100px', color: 'green' }} />
                            <h3 className="fw-light">Car Rental all over Bangladesh</h3>
                            <p className="text-muted">Car rental is an essential part of tourism in Bangladesh. Most of the major cities are covered under our network. The vehicle includes air conditioned sedan cars, micro bus and tourist bus.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="border rounded mb-2 p-2 shadow-sm">
                            <FaCompass style={{ fontSize: '100px', color: 'green' }} />
                            <h3 className="fw-light">Spot Guide on Bangladesh</h3>
                            <p className="text-muted">Want to explore Bangladesh of your own with a help of guide in Bangladesh? We are here to help you. Our well trained guides are a mix of young personal selected.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Facilities;