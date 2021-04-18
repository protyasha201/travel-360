import React from 'react';
import './Guides.css';
import martha from '../../../images/blue-2705642.jpg';
import john from '../../../images/man-2178721.jpg';
import ink from '../../../images/man-920083.jpg';
import sam from '../../../images/man-930397.jpg';

const guides = [
    {
        img: john,
        name: 'John Docker',
        about: 'Hey, This is John here.I am working with Travel360 for a long.And I had experience of 10 years as a guide.And many became friends of mine.'
    },
    {
        img: ink,
        name: 'George Ink',
        about: 'Hey, This is George here.I am working with Travel360 for a long.And I had experience of 10 years as a guide.And many became friends of mine.'
    },
    {
        img: martha,
        name: 'Martha Rein',
        about: 'Hey, This is Martha here.I am working with Travel360 for a long.And I had experience of 10 years as a guide.And many became friends of mine.'
    },
    {
        img: sam,
        name: 'Duke Sam',
        about: 'Hey, This is Sam here.I am working with Travel360 for a long.And I had experience of 10 years as a guide.And many became friends of mine.'
    },
]

const Guides = () => {
    return (
        <section className="guidesSection">
            <h2 className="text-center text-grey">Our Friendly Experienced Guides</h2>
            <div className="guides">
                {
                    guides.map(guide => 
                    <div className="guidesContainer">
                        <img src={guide.img} alt={guide.name} />
                        <h1 className="text-coral">{guide.name}</h1>
                        <p className="text-grey">{guide.about}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Guides;