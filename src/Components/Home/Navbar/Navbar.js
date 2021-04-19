import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [user] = useContext(UserContext);

    return (
        <nav className="navBar">
            <div className="headerIcon">
                <h3><span className="text-coral">TRAVEL</span><span className="text-white">360.</span></h3>
            </div>
            <div className="navLinks">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/dashboard">Admin/User</Link>
                <Link className="links" to="/blogs">Blogs</Link>
                <Link className="links" to="/services">Services</Link>
                {
                    user.isLoggedIn ?
                        <h1 className="text-bluish">{user.name}</h1>
                        :
                        <Link className="links bg-coral" to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;