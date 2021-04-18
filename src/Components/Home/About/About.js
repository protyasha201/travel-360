import React from 'react';
import './About.css';
import girlImage from '../../../images/about-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const About = () => {
    const history = useHistory();

    const findTours = () => {
        history.push('/services');
    }
    
    return (
        <section className="aboutSection">
            <div className="aboutImage">
                <img alt="girl" src={girlImage} />
            </div>
            <div className="aboutText">
                <h4 className="text-grey">ABOUT TRAVEL360</h4>
                <h1 className="text-bluish">World Best Travel Agency Company Since 2008.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <h3><FontAwesomeIcon icon={faCheck} />Ratione voluptatem.sequi nesciunt.</h3>
                <h3><FontAwesomeIcon icon={faCheck} />Ratione voluptatem.</h3>
                <h3><FontAwesomeIcon icon={faCheck} />Ratione voluptatem sequi.</h3>
                <button onClick={findTours} className="findTourBtn">Find Tours</button>
            </div>
        </section>
    );
};

export default About;