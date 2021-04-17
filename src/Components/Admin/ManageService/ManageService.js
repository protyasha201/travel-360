import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './ManageService.css';

const ManageService = () => {
    const [user] = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="mangeServiceSection">
            <div className="manageService">
                <div className="manageServiceHeader">
                    <h1>Manage Service</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="manageServiceMain">
                    <div className="tableHeader">
                        <p>Travel Service</p>
                        <p>Price</p>
                        <p>View</p>
                        <p>Delete</p>
                    </div>
                    {
                        services.map(service => <div key={service._id} className="manageServiceContainer">
                            <h4>{service.title}</h4>
                            <h4>${service.price}</h4>
                            <FontAwesomeIcon style={{ marginRight: '45px', cursor: 'pointer' }} icon={faEye} />
                            <FontAwesomeIcon style={{ marginRight: '20px', cursor: 'pointer' }} icon={faTrashAlt} />
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageService;