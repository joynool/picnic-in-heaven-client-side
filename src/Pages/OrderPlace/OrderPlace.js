import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const OrderPlace = () =>
{
    const { id } = useParams();
    const [orderService, setOrderService] = useState({});

    const { register, handleSubmit, reset } = useForm();

    useEffect(() =>
    {
        fetch(`https://shielded-river-19151.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [id]);

    const onSubmit = data =>
    {
        data.orderStatus = 'pending';
        data.orderInfo = { id: id, name: orderService.name, price: orderService.price, duration: orderService.duration };

        fetch('https://shielded-river-19151.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>
            {
                if (result.insertedId) {
                    alert('Order confirmed! Your products will deliver very soon');
                    reset();
                }
            })
    };

    return (
        <div className="container shadow rounded my-5 p-5">
            <div className="d-lg-flex justify-content-center align-items-center text-center">
                <h1 className="mx-5 fw-light">1.</h1>
                <div className="d-lg-flex border rounded p-3">
                    <div>
                        <Image src={orderService.img} width="200px" height="200px" alt="Order Image" fluid thumbnail />
                    </div>
                    <div className="ms-3">
                        <h2 className="fw-bold fs-5 text-success overflow-hidden">Order Id: {orderService._id}</h2>
                        <h3 className="fw-light fs-4">Name: {orderService.name}</h3>
                        <h3 className="fw-light fs-4">Price: {orderService.price}</h3>
                        <h3 className="fw-light fs-4">Duration: {orderService.duration}</h3>
                    </div>
                </div>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="fw-bold fs-4 text-success text-center my-4">
                    <u>Your Shipping Information</u>
                </h2>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control {...register("name")} placeholder="Enter Your Name" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register("email")} placeholder="Enter Your Email" type="email" required />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control {...register("address")} placeholder="Enter Your Address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control {...register("phone")} placeholder="+88 01x xxxx xxxx" required />
                </Form.Group>
                <Form.Group className="m-3 d-flex justify-content-center">
                    <Button type="submit" variant="success" className="me-3">Order Confirm</Button>
                    <Button variant="danger" as={Link} to="/home">Order Cancel</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default OrderPlace;