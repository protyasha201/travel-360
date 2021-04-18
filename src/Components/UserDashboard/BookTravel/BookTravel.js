import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import PaymentProcess from '../../PaymentProcess/PaymentProcess';
import './BookTravel.css';

const BookTravel = ({id}) => {
    // const { id } = useParams();
    const date = new Date().toDateString();
    const [user] = useContext(UserContext);
    const [newUser, setNewUser] = useState({ ...user });
    const [selectedTravel, setSelectedTravel] = useState([]);

    const handleChangeInfo = e => {
        const userInfoUpdate = { ...newUser };
        userInfoUpdate[e.target.name] = e.target.value;
        setNewUser(userInfoUpdate);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/bookTravel/${id}`)
            .then(res => res.json())
            .then(data => setSelectedTravel(data))
    }, [id])

    const handleBooking = () => {
        const bookingInfo = { ...newUser, ...selectedTravel, date };
        console.log(bookingInfo)
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(result => console.log(result))

        alert('Booking Complete');
    }

    return (
        <section className="bookingSection">
            <div className="book">
                <div className="bookHeader">
                    <h1>BOOK</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="bookMain">
                    <p>Name</p>
                    <input type="text" placeholder="Name..." name="name" defaultValue={user.name} onBlur={handleChangeInfo} />
                    <p>Email</p>
                    <input onBlur={handleChangeInfo} type="email" placeholder="Email..." name="email" defaultValue={user.email} />
                    <p>Booking Travel</p>
                    <input onBlur={handleChangeInfo} defaultValue={selectedTravel.title} placeholder="Travel to..." name="destination" type="text" />

                    <div style={{
                        marginTop: '50px',
                        marginBottom: '50px'
                    }}>
                        <h2 className="text-grey">Pay Your Booking</h2>
                        <PaymentProcess handleBooking={handleBooking} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookTravel;