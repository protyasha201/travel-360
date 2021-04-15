import React from 'react';
import guide from '../../../images/guide.jpg';
import trusted from '../../../images/trusted.jpg';
import experience from '../../../images/experience.jpg';
import happyTraveler from '../../../images/happyTraveler.jpg';
import './Specials.css';
import { faGrinStars, faHandshake, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faSlideshare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const specials = [
    {
        img: guide,
        icon: faUserShield,
        title: '2000+ Our Worldwide Guide'
    },
    {
        img: trusted,
        icon: faHandshake,
        title: '100% Trusted Tour Agency'
    },
    {
        img: experience,
        icon: faSlideshare,
        title: '12+ Years of Travel Experience'
    },
    {
        img: happyTraveler,
        icon: faGrinStars,
        title: '98% of Our Travelers are Happy'
    },
]

const Specials = () => {
    return (
        <section className="specialsSection">
            <h4 className="text-grey text-center">TRAVEL360 SPECIALS</h4>
            <h1 className="text-center text-bluish">Why Travel with Travel360?</h1>
            <div className="specialsContainer">
                {
                    specials.map(items => 
                    <div className="travelSpecials">
                        <img src={items.img} />
                        <FontAwesomeIcon className="specialsIcon" icon={items.icon} />
                        <h3 className="text-grey">{items.title}</h3>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Specials;