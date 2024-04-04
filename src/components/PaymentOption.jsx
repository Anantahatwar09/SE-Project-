import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './PaymentOption.css'; // Importing the CSS file for styling
import gif from '../img/Icon animation for Prio app.gif';
import Navbar from './Navbar'
import Footer from './Footer'

const PaymentOption = () => {
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const navigate = useNavigate(); 

  const handlePayment = () => {
    setIsPaymentProcessing(true);
    setTimeout(() => {
      setIsPaymentProcessing(false);
      setPaymentComplete(true);
    }, 7000); 
  };

  useEffect(() => {
    if (paymentComplete) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000); 

      return () => clearTimeout(timer); 
    }
  }, [paymentComplete, navigate]);

  return (
    <>
      <Navbar/>
      <br />
      <div className="payment-option">
        <h2>Select Your Payment Method</h2>
        <div className="options">
          <label className="option">
            <input type="radio" name="payment" value="credit" />
            <span className="checkmark"></span>
            Credit Card
          </label>
          <label className="option">
            <input type="radio" name="payment" value="debit" />
            <span className="checkmark"></span>
            Debit Card
          </label>
          <label className="option">
            <input type="radio" name="payment" value="paypal" />
            <span className="checkmark"></span>
            PayPal
          </label>
          <label className="option">
            <input type="radio" name="payment" value="upi" />
            <span className="checkmark"></span>
            UPI
          </label>
          <label className="option">
            <input type="radio" name="payment" value="cod" />
            <span className="checkmark"></span>
            Cash on Delivery
          </label>
        </div>
        {isPaymentProcessing ? (
          <div className="processing">
            Processing...
          </div>
        ) : paymentComplete ? (
          <div className="payment-complete">
            <img src={gif} alt="Payment Done" />
          </div>
        ) : (
          <button className="submit-btn" onClick={handlePayment}>Proceed to Payment</button>
        )}
      </div>
      <br />
      <Footer />
    </>  
  );
};

export default PaymentOption;
