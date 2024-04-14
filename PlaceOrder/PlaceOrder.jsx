import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { ShopContext } from '../Context/ShopContext';
import { Navigate } from 'react-router-dom';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(ShopContext);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validatePhoneNumber = () => {
        const isValid = /^\d{10}$/.test(phoneNumber);
        if (!isValid) {
            setPhoneError('Please enter a valid 10-digit phone number');
        } else {
            setPhoneError('');
        }
    };

    const validateEmail = () => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValid) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validatePhoneNumber();
        validateEmail();
        
        if(phoneError === '' && emailError === '') {
            Navigate('/payment'); 
          }
    };

    return (
        <form className="place-order" onSubmit={handleSubmit}>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                    <input type='text' placeholder='First Name' />
                    <input type='text' placeholder='Last Name' />
                </div>
                <input type='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
                {emailError && <p className="error">{emailError}</p>}
                <input type='text' placeholder='Street' />
                <div className="multi-fields">
                    <input type='text' placeholder='City' />
                    <input type='text' placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type='text' placeholder='Zip code' />
                    <input type='text' placeholder='Country' />
                </div>
                <input type='text' placeholder='Phone' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} onBlur={validatePhoneNumber} />
                {phoneError && <p className="error">{phoneError}</p>}
            </div>
            <div className="place-order-right">
                <div className="cartitems-total">
                    <h1> cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Rs{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rs{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                   
                    <button type="submit">PROCEED TO PAYMENT</button>
                   
                </div>
            </div>
        </form>
    )
}
export default PlaceOrder;
