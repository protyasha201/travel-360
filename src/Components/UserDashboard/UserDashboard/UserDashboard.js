import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SideNav from '../../Shared/SideNav/SideNav';
import AllBookings from '../AllBookings/AllBookings';
import BookTravel from '../BookTravel/BookTravel';
import Review from '../Review/Review';

const UserDashboard = () => {
    return (
        <Router>
            <SideNav />
            <Switch>
                <Route exact path="/dashboard">
                    <AllBookings />
                </Route>
                <Route path="/dashboard/bookTravel">
                    <BookTravel />
                </Route>
                <Route path="/dashboard/userReview">
                    <Review />
                </Route>
                <Route path="/dashboard/allBookings">
                    <AllBookings />
                </Route>
            </Switch>
        </Router>
    );
};

export default UserDashboard;