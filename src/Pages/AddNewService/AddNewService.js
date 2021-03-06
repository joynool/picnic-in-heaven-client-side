import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

/*------------------------------------------------------------------
            Add new service panel for service section
--------------------------------------------------------------------*/
const AddNewService = () =>
{
    const { register, handleSubmit, reset } = useForm();

    //Create new service to mongodb
    const onSubmit = data =>
    {
        fetch('https://shielded-river-19151.herokuapp.com/service', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>
            {
                if (result.insertedId) {
                    alert('Successfully added your new service');
                    reset();
                }
            });
    };

    return (
        <div className="container shadow rounded my-5 p-5">
            <h3 className="fw-light fs-2 text-success text-center"><u>Add New Service</u></h3>
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control {...register("name")} placeholder="Enter Service Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Service Description</Form.Label>
                        <Form.Control {...register("description")} placeholder="Enter Service Description" required />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Service Duration</Form.Label>
                            <Form.Select {...register("duration")} defaultValue="2 Days 2 Night" required>
                                <option>Choose...</option>
                                <option>2 Days 2 Night</option>
                                <option>3 Days 3 Night</option>
                                <option>5 Days 5 Night</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Service Price</Form.Label>
                            <Form.Control {...register("price")} placeholder="Enter Service Price" type="number" required />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Service Image Link</Form.Label>
                        <Form.Control {...register("img")} defaultValue="https://i.ibb.co/GTqwS58/new.png" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add New Service
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddNewService;