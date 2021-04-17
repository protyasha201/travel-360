import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Review.css';

const Review = () => {
    const [user] = useContext(UserContext);

    return (
        <section className="reviewSection">
            <div className="review">
                <div className="reviewHeader">
                    <h1>BOOK</h1>
                    <h1>{user.name}</h1>
                </div>
                <div className="reviewMain">
                    <p>Name</p>
                    <input type="text" placeholder="Name..." name="name" />
                    <p>Company or Team Name</p>
                    <input type="text" placeholder="Team Name" name="teamName" />
                    <p>Description</p>
                    <textarea style={{height:'200px', width: '60%', borderRadius: '10px'}} placeholder="write your review here..." />
                    <button className="reviewSubmit">Submit Review</button>
                </div>
            </div>
        </section>
    );
};

export default Review;