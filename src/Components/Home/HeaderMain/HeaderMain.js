import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './HeaderMain.css';

const HeaderMain = () => {
    const history = useHistory();
    const findTravels = () => {
        history.push('/services');
    }
    return (
        <section className="headerContainer">
            <Navbar />
            <div className="headerTexts">
                <h1>Choice<br></br>Is Yours, Service Is Ours.</h1>
                <p className="text-white">Discover your next great adventure, become an explorer to get started!</p>
                <button onClick={findTravels} className="bookBtn">
                    Find Now
                </button>
            </div>
        </section>
    );
};

export default HeaderMain;