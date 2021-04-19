import { faGgCircle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './AllBookings.css';

const AllBookings = () => {
    const [user] = useContext(UserContext);

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`https://fast-sands-57778.herokuapp.com/myBookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.email])

    return (
        <section className="allBookingsSection">
            <div className="allBookings">
                <div className="allBookingsHeader">
                    <h1>YOUR BOOKINGS</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="allBookingsMain">
                    {
                        bookings.map(booking => <div className="bookings" key={booking._id}>
                            <div className="headBookings">
                                <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faGgCircle} />
                                <h4 style={{ backgroundColor: 'coral', padding: '10px' }}>Pending</h4>
                            </div>
                            <div>
                                <h2>{booking.title}</h2>
                                <p>{booking.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllBookings;