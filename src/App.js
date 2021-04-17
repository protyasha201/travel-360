import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';

export const UserContext = createContext([]);

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    imageUrl: '',
    isLoggedIn: false
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
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
