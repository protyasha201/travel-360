import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';
import gallery1 from '../../../images/gallery1.jpg';
import gallery2 from '../../../images/gallery2.jpg';
import gallery3 from '../../../images/gallery3.jpg';
import gallery4 from '../../../images/gallery4.jpg';
import gallery5 from '../../../images/gallery5.jpg';
import gallery6 from '../../../images/gallery6.jpg';
import { faEnvelope, faMapMarkedAlt, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const gallery = [
    {
        img: gallery1,
        id:1
    },
    {
        img: gallery2,
        id:2
    },
    {
        img: gallery3,
        id:3
    },
    {
        img: gallery4,
        id:4
    },
    {
        img: gallery5,
        id:5
    },
    {
        img: gallery6,
        id:6
    },
];


const Contact = () => {
    return (
        <section className="contact">
            <div className="contactInfo">
                <div className="firstPart">
                    <h1><span className="text-coral">TRAVEL</span><span>360.</span></h1>
                    <p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim.</p>
                    <div className="iconContainer">
                        <FontAwesomeIcon className="contactIcons" icon={faFacebook} />
                        <FontAwesomeIcon className="contactIcons" icon={faTwitter} />
                        <FontAwesomeIcon className="contactIcons" icon={faInstagram} />
                        <FontAwesomeIcon className="contactIcons" icon={faGoogle} />
                        <FontAwesomeIcon className="contactIcons" icon={faLinkedin} />
                    </div>
                </div>
                <div className="secondPart">
                    <h2>Services</h2>
                    <div className="servicesLinks">
                        <Link to="/" className="footerLinks" href="#">About Us</Link>
                        <Link to="/" className="footerLinks" href="#">How It Works</Link>
                        <Link to="/" className="footerLinks" href="#">Our Blog</Link>
                        <Link to="/" className="footerLinks" href="#">Our Services</Link>
                        <Link to="/" className="footerLinks" href="#">Contact Us</Link>
                    </div>
                </div>
                <div className="gallery">
                    <h2>Gallery</h2>
                    <div className="photosContainer">
                        {
                            gallery.map(photos => <img alt="gallery" key={photos.id} src={photos.img}/>)
                        }
                    </div>
                </div>
                <div>
                    <h2>Contacts</h2>
                    <p><FontAwesomeIcon icon={faMapMarkedAlt} className="extraIcons" />Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>

                    <p><FontAwesomeIcon className="extraIcons" icon={faMicrophone} />+2(305) 587-3407</p>

                    <p><FontAwesomeIcon className="extraIcons" icon={faEnvelope} />protyasha0999@example.com</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;