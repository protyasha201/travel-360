import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import AddAdmin from '../../Admin/AddAdmin/AddAdmin';
import AddService from '../../Admin/AddService/AddService';
import ManageService from '../../Admin/ManageService/ManageService';
import OrderList from '../../Admin/OrderList/OrderList';
import SideNav from '../../Shared/SideNav/SideNav';
import AllBookings from '../../UserDashboard/AllBookings/AllBookings';
import BookTravel from '../../UserDashboard/BookTravel/BookTravel';
import Review from '../../UserDashboard/Review/Review';


const Dashboard = () => {
    const [user] = useContext(UserContext);
    const {id} = useParams();

    return (
        <Router>
            <SideNav />
            <Switch>
                <Route exact path="/dashboard">
                    {
                        user.isAdmin ? <OrderList /> : <AllBookings />
                    }
                </Route>
                <Route path="/dashboard/orderList">
                    <OrderList />
                </Route>
                <Route path="/dashboard/addService">
                    <AddService />
                </Route>
                <Route path="/dashboard/addAdmin">
                    <AddAdmin />
                </Route>
                <Route path="/dashboard/manageService">
                    <ManageService />
                </Route>
                <Route exact path="/dashboard/bookTravel">
                    <BookTravel />
                </Route>
                <Route path="/dashboard/bookTravel/:id">
                    <BookTravel id={id} />
                </Route>
                <Route path="/dashboard/allBookings">
                    <AllBookings />
                </Route>
                <Route path="/dashboard/userReview">
                    <Review />
                </Route>
            </Switch>
        </Router>
    );
};

export default Dashboard;