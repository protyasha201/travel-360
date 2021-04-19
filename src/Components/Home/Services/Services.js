import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const history = useHistory();

    const bookTravel = id => {
        history.push(`/dashboard/bookTravel/${id}`);
    }

    return (
        <section className="servicesSection">
            <h2 className="text-center text-bluish">Travelling Services</h2>
            <div className="services">
                {
                    services.map(service => <div onClick={() => bookTravel(service._id)} key={service._id} className="servicesContainer">
                        <div className="imageContainer">
                            <img alt={service.title} src={service.imageUrl} />
                        </div>
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                        <div className="d-flex justify-content-space align-items-center">
                            <h4>${service.price}</h4>
                            <button className="bookTravelBtn" onClick={() => bookTravel(service._id)}>Book Travel</button>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Services;