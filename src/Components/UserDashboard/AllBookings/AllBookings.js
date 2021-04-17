import { faGgCircle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './AllBookings.css';

const AllBookings = () => {
    const [user] = useContext(UserContext);

    return (
        <section className="allBookingsSection">
            <div className="allBookings">
                <div className="allBookingsHeader">
                    <h1>YOUR BOOKINGS</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="allBookingsMain">
                    <div className="bookings">
                        <div className="headBookings">
                            <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faGgCircle} />
                            <h4 style={{ backgroundColor: 'coral', padding: '10px' }}>Pending</h4>
                        </div>
                        <div>
                            <h2>Anti Face Treatment</h2>
                            <p>lorem ipsum something bla bla and never gonna push this finger hah ha wow . </p>
                        </div>
                    </div>
                    <div className="bookings">
                        <div className="headBookings">
                            <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faGgCircle} />
                            <h4 style={{ backgroundColor: 'coral', padding: '10px' }}>Pending</h4>
                        </div>
                        <div>
                            <h2>Anti Face Treatment</h2>
                            <p>lorem ipsum something bla bla and never gonna push this finger hah ha wow . </p>
                        </div>
                    </div>
                    <div className="bookings">
                        <div className="headBookings">
                            <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faGgCircle} />
                            <h4 style={{ backgroundColor: 'coral', padding: '10px' }}>Pending</h4>
                        </div>
                        <div>
                            <h2>Anti Face Treatment</h2>
                            <p>lorem ipsum something bla bla and never gonna push this finger hah ha wow . </p>
                        </div>
                    </div>
                    <div className="bookings">
                        <div className="headBookings">
                            <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faGgCircle} />
                            <h4 style={{ backgroundColor: 'coral', padding: '10px' }}>Pending</h4>
                        </div>
                        <div>
                            <h2>Anti Face Treatment</h2>
                            <p>lorem ipsum something bla bla and never gonna push this finger hah ha wow . </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllBookings;