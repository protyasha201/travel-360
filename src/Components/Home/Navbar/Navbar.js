import React from 'react';
import logo from '../../../images/icon.PNG';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="headerIcon">
                <h3><span className="text-coral">TRAVEL</span><span className="text-white">360.</span></h3>
            </div>
            <div className="navLinks">
                <a className="links" href="#">Home</a>
                <a className="links" href="#">Admin</a>
                <a className="links" href="#">Blogs</a>
                <a className="links" href="#">Services</a>
                <a className="links bg-coral" href="#">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;