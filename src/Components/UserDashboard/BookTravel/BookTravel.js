import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './BookTravel.css';

const BookTravel = () => {
    const [user] = useContext(UserContext);

    return (
        <section className="bookingSection">
            <div className="book">
                <div className="bookHeader">
                    <h1>BOOK</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="bookMain">
                    <p>Name</p>
                    <input type="text" placeholder="Name..." name="name" />
                    <p>Email</p>
                    <input type="email" placeholder="Email..." name="email" />
                    <p>Booking Travel</p>
                    <input placeholder="Travel to..." name="destination" type="text" />
                </div>
            </div>
        </section>
    );
};

export default BookTravel;