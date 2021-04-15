import React from 'react';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';
import Specials from '../Specials/Specials';

const Home = () => {
    return (
        <div>
            <HeaderMain />
            <Specials />
            <About />
        </div>
    );
};

export default Home;