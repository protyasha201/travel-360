import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';

const stripePromise = loadStripe('pk_test_51Ie3qfGyONO5UB1HkQCTkx4nNpRtdEitPLUY5tN5wTLZwPFSShmOfGMp7vtMvw3MBWYoohqmddeo340OBQCkGClR009BlA7eHY');

const PaymentProcess = (props) => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm handleBooking={props.handleBooking} />
        </Elements>
    );
};

export default PaymentProcess;