import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './OrderList.css';

const OrderList = () => {
    const [orderedBookings, setOrderedBookings] = useState([]);
    const [user] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/orderedBookings')
            .then(res => res.json())
            .then(data => setOrderedBookings(data))
    }, [])


    return (
        <section className="orderList">
            <div className="orders">
                <div className="ordersHeader">
                    <h1>Order List</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="ordersMain">
                    <div className="tableHeader">
                        <p>Name</p>
                        <p>Email ID</p>
                        <p>Travel Service</p>
                        <p>Pay With</p>
                        <p>Status</p>
                    </div>
                    {
                        orderedBookings.map(bookings => <div className="ordersContainer" key={bookings._id}>
                            <h4>{bookings.name}</h4>
                            <h4>{bookings.email}</h4>
                            <h4>{bookings.title}</h4>
                            <h4>{bookings.paymentMethod.card.brand}</h4>
                            <select className="selectStatus">
                                <option>Pending</option>
                                <option name="Done" >Done</option>
                                <option name="onGoing" >On going</option>
                            </select>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OrderList;