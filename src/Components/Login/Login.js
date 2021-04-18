import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import image from '../../images/loginBg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/admins')
        .then(res => res.json())
        .then(data => setAdmins(data))
    },[])

    // console.log(admins);
    // console.log(user);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    
    if (!firebase.apps.length > 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const newUser = result.user;

                const userInfoUpdate = {...user}
                userInfoUpdate.name = newUser.displayName;
                userInfoUpdate.email = newUser.email;
                userInfoUpdate.imageUrl = newUser.photoURL;
                userInfoUpdate.isLoggedIn = true;

                const admin = admins.filter(admin => newUser.email === admin.email);

                if(admin[0].email === newUser.email) {
                    userInfoUpdate.isAdmin = true;
                }
                else{
                    userInfoUpdate.isAdmin = false;
                }

                setUser(userInfoUpdate);
                history.replace(from);

            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <section className="loginPage">
            <img alt="backBg" src={image} />
            <div className="loginForm">
                <p className="text-bluish">Enter Email</p>
                <input type="email"></input>
                <p className="text-bluish">Enter Password</p>
                <input type="password"></input>
                <p style={{ color: 'red' }}>Forgot Password?</p>
                <p>Or</p>
                <div onClick={signInWithGoogle} className="d-flex align-items-center justify-content-center loginOption">
                    <FontAwesomeIcon className="text-coral" icon={faGoogle} />
                    <p>Login with Google</p>
                </div>
            </div>
        </section>
    );
};

export default Login;