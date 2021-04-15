import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <section className="footer">
            <p>Travel360 <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {date} All Right Reserved </p>
            <p><span>Terms of Service</span> | <span>Privacy Policy</span></p>
        </section>
    );
};

export default Footer;