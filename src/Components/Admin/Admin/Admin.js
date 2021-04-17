import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SideNav from '../../Shared/SideNav/SideNav';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import ManageService from '../ManageService/ManageService';
import OrderList from '../OrderList/OrderList';

const Admin = () => {
    return (
        <Router>
            <SideNav />
            <Switch>
                <Route exact path="/dashboard">
                    <OrderList />
                </Route>
                <Route path="/dashboard/orderList">
                    <OrderList />
                </Route>
                <Route path="/dashboard/addAdmin">
                    <AddAdmin />
                </Route>
                <Route path="/dashboard/manageService">
                    <ManageService />
                </Route>
                <Route path="/dashboard/addService">
                    <AddService />
                </Route>
            </Switch>
        </Router>
    );
};

export default Admin;