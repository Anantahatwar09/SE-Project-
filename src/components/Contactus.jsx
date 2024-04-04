import React from 'react';
import './ContactUs.css'; // Make sure to create this CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <>
        <Navbar />
        <div className="contact-us-container">
        <div className="contact-info">
            <h2>Contact Us</h2>
            <p><strong>Head Office</strong></p>
            <p>Coep College</p>
            <p>shivajinagar, Pune</p>
            <a href="anantahatwar1@gmail.com">anantahatwar@gmail.com</a>

        </div>
        <div className="contact-form">
            <h2>Reach Us Quickly</h2>
            <form>
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Mobile No.*" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
            </form>
        </div>
        </div>
        <Footer />
        
     </>   
  );
};

export default ContactUs;
