import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="headerContainer">
            <Navbar />
            <div className="headerTexts">
                <h1>Choice<br></br>Is Yours, Service Is Ours.</h1>
                <p className="text-white">Discover your next great adventure, become an explorer to get started!</p>
                <button className="bookBtn">
                    Find Now
                </button>
            </div>
        </section>
    );
};

export default HeaderMain;