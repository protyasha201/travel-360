import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './ManageService.css';

const ManageService = () => {
    const [user] = useContext(UserContext);

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
                    <div className="manageServiceContainer">
                        <h4>New York City Tour</h4>
                        <h4>$340</h4>
                        <FontAwesomeIcon style={{marginRight: '45px', cursor: 'pointer'}} icon={faEye} />
                        <FontAwesomeIcon style={{marginRight: '20px', cursor: 'pointer'}} icon={faTrashAlt} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageService;