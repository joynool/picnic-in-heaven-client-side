import React, { useEffect, useState } from 'react';
import { Badge, Button, CloseButton, Table } from 'react-bootstrap';

const ManageAllOrder = () =>
{
    const [orders, setOrders] = useState([]);

    useEffect(() =>
    {
        fetch('https://shielded-river-19151.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.log(error));
    }, []);

    const handleUpdateStatus = id =>
    {
        const statusUpdate = { orderStatus: 'approved' };
        fetch(`https://shielded-river-19151.herokuapp.com/order/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(statusUpdate)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.modifiedCount > 0) {
                    alert('Your Order approved successfully');
                }
            });
    };

    const handleDelete = id =>
    {
        const proceed = window.confirm('Are you sure, you want to DELETE?');
        if (proceed) {
            fetch(`https://shielded-river-19151.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data =>
                {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted the Order');
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                    }
                })
        }
    }

    return (
        <div className="container my-5">
            <h3 className="fw-light fs-2 text-success text-center my-4"><u>All Order Management Panel</u></h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Service Name</th>
                        <th>Service Price</th>
                        <th>Shipping Name</th>
                        <th>Shipping Phone</th>
                        <th>Order Status</th>
                        <th className="text-center">Management</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>{order.orderInfo.id}</td>
                            <td>{order.orderInfo.name}</td>
                            <td>{order.orderInfo.price}</td>
                            <td>{order.name}</td>
                            <td>{order.phone}</td>
                            <td>
                                {
                                    (order.orderStatus === 'pending') ? <Badge bg="warning" text="dark">
                                        Pending
                                    </Badge> : <Badge bg="success" text="light">
                                        Approved
                                    </Badge>
                                }

                            </td>
                            <td className="d-flex justify-content-around align-items-center">
                                <Button onClick={() => handleUpdateStatus(order._id)} variant="outline-primary" size="sm">
                                    Order Approve
                                </Button>
                                <CloseButton onClick={() => handleDelete(order._id)} className="fs-5 bg-danger rounded-circle ms-2" title="Delete Order" />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrder;