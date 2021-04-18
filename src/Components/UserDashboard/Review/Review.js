import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './Review.css';

const Review = () => {
    const [user] = useContext(UserContext);
    const [reviews, setReviews] = useState({
        name: '',
        imgUrl: user.imageUrl,
        description: ''
    });

    const handleBlur = e => {
        const reviewsInfo = { ...reviews };

        reviewsInfo[e.target.name] = e.target.value;

        setReviews(reviewsInfo);
    }

    const submitReview = () => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(result => console.log(result))

        alert('Review Added Successfully');
    }

    return (
        <section className="reviewSection">
            <div className="review">
                <div className="reviewHeader">
                    <h1>Review</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="reviewMain">
                    <p>Name</p>
                    <input onBlur={handleBlur} type="text" placeholder="Name..." name="name" />
                    <p>Description</p>
                    <textarea style={{
                        width: '60%',
                        height: '200px',
                        borderRadius: '10px'
                    }} onBlur={handleBlur} name="description" placeholder="write your review here..." />
                    <button onClick={submitReview} className="reviewSubmit">Submit Review</button>
                </div>
            </div>
        </section>
    );
};

export default Review;