import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CardForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const handleBooking = props.handleBooking;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            handleBooking();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe} style={{
                padding: '10px',
                color: 'white',
                backgroundColor: 'coral',
                border: 'none',
                borderRadius: '5px',
                fontSize: '20px',
                cursor: 'pointer'
            }}>Confirm Booking</button>
        </form>
    );
};

export default CardForm;