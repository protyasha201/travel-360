import React, { useEffect, useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://fast-sands-57778.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="testimonialsSection">
            <h2 className="text-center text-bluish">Testimonials</h2>
            <div className="testimonials">
                {
                    reviews.map(review =>
                        <div key={review._id} className="testimonialsContainer">
                            <img alt={review.name} src={review.imgUrl} />
                            <h1 className="text-grey">{review.name}</h1>
                            <p>{review.description}</p>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Testimonials;