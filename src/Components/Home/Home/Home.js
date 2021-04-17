import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import Specials from '../Specials/Specials';

const Home = () => {
    return (
        <div>
            <HeaderMain />
            <Specials />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;