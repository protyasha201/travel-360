import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
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
        history.push(`/dashboard`);
    }

    return (
        <section className="servicesSection">
            <h2 className="text-center text-bluish">Travel Services</h2>
            <div className="services">
                {
                    services.map(service => <div key={service._id} className="servicesContainer">
                        <img src={service.imageUrl} />
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                        <div className="d-flex justify-content-space align-items-center">
                            <h4>${service.price}</h4>
                            <button style={{
                                height: '40px',
                                backgroundColor: 'coral',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '20px',
                                color: 'white'
                            }} onClick={() => bookTravel(service._id)}>Book Travel</button>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Services;