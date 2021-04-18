import { faCommentDots, faEdit, faList, faPlus, faRoute, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './SideNav.css';

const SideNav = () => {
    const [user] = useContext(UserContext);

    return (
        <aside className="sideNav">
            <h1 className="tittle">
                <span className="text-coral">Travel</span>
                <span className="text-white">360</span>
            </h1>
            <div className="adminSidebar">
                <Link to="/dashboard/orderList" className="sideLinks"><FontAwesomeIcon icon={faRoute} />Travel Bookings</Link>
                <Link to="/dashboard/addService" className="sideLinks"><FontAwesomeIcon icon={faPlus} />Add Service</Link>
                <Link to="/dashboard/addAdmin" className="sideLinks"><FontAwesomeIcon icon={faUser} />Make Admin</Link>
                <Link to="/dashboard/manageService" className="sideLinks"><FontAwesomeIcon icon={faEdit} />Manage Services</Link>
            </div>
            
            {/* <div className="userSidebar">
                <Link to="/dashboard/bookTravel" className="sideLinks"><FontAwesomeIcon icon={faShoppingCart} />Book Now</Link>
                <Link to="/dashboard/allBookings" className="sideLinks"><FontAwesomeIcon icon={faList} />All Bookings</Link>
                <Link to="/dashboard/userReview" className="sideLinks"><FontAwesomeIcon icon={faCommentDots} />Review</Link>
            </div> */}
        </aside>
    );
};

export default SideNav;