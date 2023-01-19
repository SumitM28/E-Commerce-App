// import { useState } from 'react';
import Navbar from '../common/navbar/Navbar'
import './payment.css'
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const KEY = "pk_test_51MODpqSD3oU7zTPHswFLZVpTgLqCX7IvmF5NZJzOflkidauYjAU8vaR0laMBtLAq1Jyx9A6zTZg5bSvImWhgyl3a00aTGPXBpM"
const Payment = () => {
    const totalPrice= useSelector(state => state.cart.totalPrice);

    // const [payment, SetPayment] = useState(false);
    const navigate=useNavigate();
    const onToken = (token) => {
        console.log(token)
        if(token){
            navigate('/checkout/success')
        }
    }
    return (
        <>
            <Navbar />
            <div className='payment'>
                <StripeCheckout
                    name='Sumit Shop'
                    image='https://cdn-icons-png.flaticon.com/512/3665/3665953.png'
                    billingAddress
                    shippingAddress
                    amount={totalPrice*100}
                    token={onToken}
                    stripeKey={KEY}
                >
                <button className='paymentBTN'>Pay Now!</button>
                </StripeCheckout>
            </div>
        </>
    )
}

export default Payment