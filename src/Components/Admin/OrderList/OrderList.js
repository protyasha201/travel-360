import React from 'react';
import './OrderList.css';

const OrderList = () => {
    return (
        <section className="orderList">
            <div className="orders">
                <div className="ordersHeader">
                    <h1>Order List</h1>
                    <h1>Sufi Ahmed</h1>
                </div>
                <div className="ordersMain">
                    <div className="tableHeader">
                        <p>Name</p>
                        <p>Email ID</p>
                        <p>Travel Service</p>
                        <p>Pay With</p>
                        <p>Status</p>
                    </div>
                    <div className="ordersContainer">
                        <h4>Anika Ahmed</h4>
                        <h4>anika@gmail.com</h4>
                        <h4>New York City Tour</h4>
                        <h4>Credit Card</h4>
                        <select className="selectStatus">
                            <option name="pending">Pending</option>
                            <option name="Done">Done</option>
                            <option name="onGoing">On going</option>
                        </select>
                    </div>
                    <div className="ordersContainer">
                        <h4>Anika Ahmed</h4>
                        <h4>anika@gmail.com</h4>
                        <h4>New York City Tour</h4>
                        <h4>Credit Card</h4>
                        <select className="selectStatus">
                            <option name="pending">Pending</option>
                            <option name="Done">Done</option>
                            <option name="onGoing">On going</option>
                        </select>
                    </div>
                    <div className="ordersContainer">
                        <h4>Anika Ahmed</h4>
                        <h4>anika@gmail.com</h4>
                        <h4>New York City Tour</h4>
                        <h4>Credit Card</h4>
                        <select className="selectStatus">
                            <option name="pending">Pending</option>
                            <option name="Done">Done</option>
                            <option name="onGoing">On going</option>
                        </select>
                    </div>
                    <div className="ordersContainer">
                        <h4>Anika Ahmed</h4>
                        <h4>anika@gmail.com</h4>
                        <h4>New York City Tour</h4>
                        <h4>Credit Card</h4>
                        <select className="selectStatus">
                            <option name="pending">Pending</option>
                            <option name="Done">Done</option>
                            <option name="onGoing">On going</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;