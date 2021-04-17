import React from 'react';
import './AddAdmin.css';

const AddAdmin = () => {
    return (
        <section className="addAdminSection">
            <div className="addAdmin">
                <div className="addAdminHeader">
                    <h1>Add Admin</h1>
                    <h1>Sufi Ahmed</h1>
                </div>
                <div className="addAdminMain">
                    <p>Email</p>
                    <input type="text" placeholder="dummy@gmail.com" name="email" />
                    <button className="addAdminBtn">Add Admin</button>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;