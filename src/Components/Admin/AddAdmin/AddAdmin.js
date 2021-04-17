import React, { useState } from 'react';
import './AddAdmin.css';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({
        email: '',
    })
    const handleBlur = e => {
        const adminInfo = {
            email: e.target.value
        };
        setAdmin(adminInfo)
    }
    const addAdmin = () => {
        fetch('http://localhost:5000/addAdmins', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        
            alert('Admin Addeed');
    }
    return (
        <section className="addAdminSection">
            <div className="addAdmin">
                <div className="addAdminHeader">
                    <h1>Add Admin</h1>
                    <h1>Sufi Ahmed</h1>
                </div>
                <div className="addAdminMain">
                    <p>Email</p>
                    <input onBlur={handleBlur} type="text" placeholder="dummy@gmail.com" name="email" />
                    <button onClick={addAdmin} className="addAdminBtn">Add Admin</button>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;