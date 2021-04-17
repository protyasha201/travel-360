import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import './BookTravel.css';

const BookTravel = () => {
    const date = new Date().toDateString();
    const [user] = useContext(UserContext);
    const [newUser,setNewUser] = useState({...user});
    const [selectedTravel, setSelectedTravel] = useState([]);

    const handleChangeInfo = e => {
        const userInfoUpdate = {...newUser};
        userInfoUpdate[e.target.name] = e.target.value;
        setNewUser(userInfoUpdate);
    }
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/bookTravel/${id}`)
        .then(res => res.json())
        .then(data => setSelectedTravel(data))
    },[id])

    const handleBooking = () => {
        const bookingInfo = {...newUser, ... selectedTravel, date};
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(result => console.log(result))

        alert('Booking Complete');
    }

    console.log(selectedTravel);
    return (
        <section className="bookingSection">
            <div className="book">
                <div className="bookHeader">
                    <h1>BOOK</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="bookMain">
                    <p>Name</p>
                    <input type="text" placeholder="Name..." name="name" defaultValue={user.name} onChange={handleChangeInfo} />
                    <p>Email</p>
                    <input type="email" placeholder="Email..." name="email" defaultValue={user.email} />
                    <p>Booking Travel</p>
                    <input onChange={handleChangeInfo} defaultValue={selectedTravel.title} placeholder="Travel to..." name="destination" type="text" />
                    <button style={{
                        padding: '10px',
                        color: 'white',
                        backgroundColor: 'coral',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }} onClick={handleBooking}>Confirm Booking</button>
                </div>
            </div>
        </section>
    );
};

export default BookTravel;