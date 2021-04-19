import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './AddService.css';

const AddService = () => {
    const [user] = useContext(UserContext);
    
    const [newService, setNewService] = useState({
        title: '',
        price: null,
        imageUrl: '',
        description: ''
    });

    const handleBlur = e => {
        const newServiceUpdate = { ...newService };
        newServiceUpdate[e.target.name] = [e.target.value];
        setNewService(newServiceUpdate);
    }

    const handlePhotoUpload = e => {
        const imageData = new FormData();
        imageData.set('key', 'b07e1e0b5c689a98391f6a4377e0f41a');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                const newServiceUpdate = { ...newService };
                newServiceUpdate.imageUrl = response.data.data.display_url
                setNewService(newServiceUpdate);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const addService = e => {
        console.log(newService);
        fetch('https://fast-sands-57778.herokuapp.com/addService', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(result => console.log(result))

        alert('Service Saved');
        e.preventDefault();
    }

    return (
        <section className="addServiceSection">
            <div className="addService">
                <div className="bookHeader">
                    <h1>Add Service</h1>
                    <h1>{user.name}</h1>
                </div>
                <form onSubmit={addService} className="addServiceMain">
                    <p>Service Tittle</p>
                    <input required onBlur={handleBlur} type="text" placeholder="Title..." name="title" />
                    <p>Price</p>
                    <input required onBlur={handleBlur} type="number" placeholder="Price..." name="price" />
                    <p>Description</p>
                    <input required onBlur={handleBlur} type="text" placeholder="Description..." name="description" />
                    <div className="uploadContainer">
                        <p>Add Photo</p>
                        <label className="label" htmlFor="files"><FontAwesomeIcon icon={faUpload} />Upload Photo</label>
                        <input onChange={handlePhotoUpload} name="image  " style={{ visibility: 'hidden' }} type="file" id="files" />
                    </div>
                    <button className="addServiceBtn">Add</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;