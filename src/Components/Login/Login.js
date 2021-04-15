import React from 'react';
import './Login.css';
import image from '../../images/loginBg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    return (
        <section className="loginPage">
            <img src={image} />
            <div className="loginForm">
                <p className="text-bluish">Enter Email</p>
                <input type="email"></input>
                <p className="text-bluish">Enter Password</p>
                <input type="password"></input>
                <p style={{color: 'red'}}>Forgot Password?</p>
                <p>Or</p>
                <div className="d-flex align-items-center justify-content-center loginOption">
                    <FontAwesomeIcon className="text-coral" icon={faGoogle} />
                    <p>Login with Google</p>
                </div>
            </div>
        </section>
    );
};

export default Login;