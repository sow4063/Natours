/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51HYsvGCiLJt0ezB3HYGjPtm8fdHD9SXCwoomKd3zLItToQ6sCWQLjsX3JdnGl1m8SZiSZcXSL5xJvyoNHfjrvqCM00UB6zdtjU');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
