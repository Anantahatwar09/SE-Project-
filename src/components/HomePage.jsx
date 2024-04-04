import React from 'react';
import { Link } from 'react-router-dom'; 
//import { useNavigate } from 'react-router-dom';// Import Link for navigation
import './HomePage.css'; // Assuming you will create a CSS file for styling
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import Navbar from './Navbar';
import Ourservices from './Ourservices'
import CustomerSupportCards from './CustomerSupportCards';
//import Booking from './Booking'

import tractor from '../img/tractor.jpg'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 4000, 
}


function HomePage() {

  return (
    <>
    <div className="all">
      <Navbar />
      <br/>
      <div>
        <Slider {...settings}>
          <div>
            <img src={tractor} alt="Slide 1" style={{ width: '100%', height: '550px' }} />
          </div>
          <div>
            <img src={tractor} alt="Slide 2" style={{ width: '100%', height: '550px' }} />
          </div>
        </Slider>
      </div>
      <br />
      <br/>
      <CustomerSupportCards />
      <br />

      {/* New Get Started Section */}
      <div className="get-started-section">
        <h2 style={{ textAlign: 'center' }}>GET STARTED</h2>
        <p>We open the door to thousands of farmers. Rent your equipment for the off-season, and create an advertisement on our platform. Through our rigorous customer compliance, we make sure that only reliable users gain access to our digital marketplace. There are two ways to get started:</p>
        
        <div className="get-started-options">
          <div className="option">
            <h3>Post ads as an Owner*</h3>
            <p>As an owner, start posting rent offers for the agricultural equipment by providing available timeline to the buyers/customers and get rapid reactions from nearby interested customers.</p>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
          
          <div className="option">
            <h3>Book as a Customer*</h3>
            <p>As a customer, start exploring and filter the various agricultural equipments for you. Communicate with the owner for negotiation/offers, and book great deals while experiencing satisfaction.</p>
            <Link to="/booking" className="btn btn-secondary">Explore</Link>
          </div>
        </div>
      </div>
      <Ourservices />
     
      <div className="farm-equipment-section">
      <h2 className="section-eq" style={{ color: 'dark' }}>Sell New & Used Farm Equipment</h2>
        <div className="equipment-grid">
          <div className="equipment-item">
            <img src={require('../img/tractor.jpg')} alt="Tractors" />
            <h3>Tractors</h3>
            <div className="hover-text">Learn More</div>
          </div>
          <div className="equipment-item">
            <img src={require('../img/tractor.jpg')} alt="Tillage Equipment" />
            <h3>Tillage Equipment</h3>
            <div className="hover-text">Learn More</div>
          </div>
          <div className="equipment-item">
            <img src={require('../img/tractor.jpg')} alt="Seeding Equipments" />
            <h3>Seeding Equipments</h3>
            <div className="hover-text">Learn More</div>
          </div>
          <div className="equipment-item">
            <img src={require('../img/tractor.jpg')} alt="Landscape Equipment" />
            <h3>Landscape Equipment</h3>
            <div className="hover-text">Learn More</div>
          </div>
          <div className="equipment-item">
            <img src={require('../img/tractor.jpg')} alt="Crop Protection" />
            <h3>Crop Protection</h3>
            <div className="hover-text">Learn More</div>
          </div>
          <div className="equipment-item">
            <img src={require('../img/tractor.jpg')} alt="Harvest Equipment" />
            <h3>Harvest Equipment</h3>
            <div className="hover-text">Learn More</div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div> 
      


    </>
    
    
  );
}



export default HomePage;
