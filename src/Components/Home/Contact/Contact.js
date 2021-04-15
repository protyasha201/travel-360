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

const gallery = [
    {
        img: gallery1
    },
    {
        img: gallery2
    },
    {
        img: gallery3
    },
    {
        img: gallery4
    },
    {
        img: gallery5
    },
    {
        img: gallery6
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
                        <a className="footerLinks" href="#">About Us</a>
                        <a className="footerLinks" href="#">How It Works</a>
                        <a className="footerLinks" href="#">Our Blog</a>
                        <a className="footerLinks" href="#">Our Services</a>
                        <a className="footerLinks" href="#">Contact Us</a>
                    </div>
                </div>
                <div className="gallery">
                    <h2>Gallery</h2>
                    <div className="photosContainer">
                        {
                            gallery.map(photos => <img src={photos.img}/>)
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