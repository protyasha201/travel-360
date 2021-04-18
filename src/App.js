import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';

export const UserContext = createContext([]);

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    imageUrl: '',
    isLoggedIn: false,
    isAdmin: true
  });

  return (
    <UserContext.Provider value={[user,setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/bookTravel/:id">
            <Dashboard />
          </PrivateRoute>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
