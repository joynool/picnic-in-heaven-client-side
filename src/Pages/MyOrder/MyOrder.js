import React from 'react';
import { Badge, CloseButton, Table } from 'react-bootstrap';

const MyOrder = () =>
{
    return (
        <div className="container my-5">
            <h3 className="fw-light fs-2 text-success text-center my-4"><u>My Order</u></h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Service Name</th>
                        <th>Service Price</th>
                        <th>Shipping Name</th>
                        <th>Shipping Phone</th>
                        <th>Status</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <Badge bg="warning" text="dark">
                                Pending
                            </Badge>
                        </td>
                        <td><CloseButton className="fs-5 bg-danger rounded-circle" /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <Badge bg="warning" text="dark">
                                Pending
                            </Badge>
                        </td>
                        <td><CloseButton className="fs-5 bg-danger rounded-circle" /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <Badge bg="warning" text="dark">
                                Pending
                            </Badge>
                        </td>
                        <td><CloseButton className="fs-5 bg-danger rounded-circle" /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;