import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AddService.css';

const AddService = () => {
    return (
        <section className="addServiceSection">
            <div className="addService">
                <div className="bookHeader">
                    <h1>Add Service</h1>
                    <h1>Sufi Ahmed</h1>
                </div>
                <div className="addServiceMain">
                    <p>Service Tittle</p>
                    <input type="text" placeholder="Title..." name="tittle" />
                    <p>Description</p>
                    <input type="text" placeholder="Description..." name="description" />
                    <div className="uploadContainer">
                        <p>Add Photo</p>
                        <label className="label" htmlFor="files"><FontAwesomeIcon icon={faUpload} />Upload Photo</label>
                        <input style={{ visibility: 'hidden' }} type="file" id="files" />
                    </div>
                <button className="addServiceBtn">Add</button>
                </div>
            </div>
        </section>
    );
};

export default AddService;