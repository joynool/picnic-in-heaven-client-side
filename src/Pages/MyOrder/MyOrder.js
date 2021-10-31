import React, { useEffect, useState } from 'react';
import { Badge, CloseButton, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () =>
{
    const { user } = useAuth();
    //console.log(user.email)
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() =>
    {
        fetch(`https://shielded-river-19151.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
            .catch(error => console.log(error));
    }, [user.email]);

    const handleMyOrderDelete = id =>
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
                        const restOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(restOrders);
                    }
                })
        }
    }

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
                        <th className="text-center">Order Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map(order => <tr key={order._id}>
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
                                <CloseButton onClick={() => handleMyOrderDelete(order._id)} className="fs-5 bg-danger rounded-circle ms-2" />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;