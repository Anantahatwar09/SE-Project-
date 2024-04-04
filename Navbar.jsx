import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  // const navigate = useNavigate();

  // const handleProtectedLinkClick = (destination) => {
  //   if (!userEmail) {
  //     // Redirect to login page if user email is not available
  //     navigate('/login');
  //   } else {
  //     // Redirect to the desired destination
  //     navigate(destination);
  //   }
  // };
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    // Check local storage for user email on component mount
    const email = localStorage.getItem('email');
    if (email) {
      setUserEmail(email);
    }
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={require('../img/logo.png')} alt="-" />
      </div>
      <div className="navbar-header">
        <h1>Krishi Sadhan</h1>
        <h2>Ministry of Skill Development</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard" >Dashboard</Link></li>
        <li><Link to="/booking" >Bookings</Link></li>

        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li>
          <div id="google_element"></div> 
        </li>
      </ul>
      <div className="navbar-buttons">
        {userEmail ? (
          <div className="user-info1">
            {userEmail}
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-login">Login</Link>
            <Link to="/register" className="btn btn-signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;