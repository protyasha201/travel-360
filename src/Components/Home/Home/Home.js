import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Guides from '../Guides/Guides';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HeaderMain />
            <Specials />
            <About />
            <Guides />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;