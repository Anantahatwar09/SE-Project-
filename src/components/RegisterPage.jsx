import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RegisterRoute } from '../utils/APIroutes';

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pinCode, setPincode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.body.style.backgroundImage = `url(${require('../img/back.jpg')})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.margin = '0';
    document.body.style.height = '0';
    document.body.style.backgroundRepeat = 'no-repeat';

    return () => {
      document.body.style.background = 'none';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch(RegisterRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, mobileNumber, pinCode }),
      });

      if (!response.ok) {
        throw new Error(await response.text() || 'Something went wrong with the request');
      }

      const data = await response.json();
      localStorage.setItem('email', email);
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <img src={require('../img/logo.png')} alt="Logo" style={logoStyle} />
        <div style={{ marginTop: '-120px' }}>
          <h1 style={{ marginBottom: '30px', fontSize: '1.9rem', fontWeight: 'bold' }}>Register</h1>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" style={inputStyle} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={inputStyle} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={inputStyle} />
        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" style={inputStyle} />
        <input type="text" value={pinCode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Register</button>
        <p style={{ marginTop: '10px' }}>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}
// Updated CSS styles in JavaScript format

const formStyle = {
  background: 'rgba(255, 255, 255, 0.8)', // Lighter background for better readability
  padding: '30px 50px', // Adjusted padding for better spacing
  borderRadius: '20px', // Rounded borders for modern look
  boxShadow: '0 8px 20px rgba(0,0,0,0.12)', // Softer shadow for subtle depth
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '350px', // Slightly larger form for better spacing
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Modern font
};

const logoStyle = {
  width: '120px', // Slightly larger logo
  marginBottom: '120px', // More space below the logo
};

const inputStyle = {
  width: '100%',
  padding: '9px', // More padding for larger input fields
  marginBottom: '9px', // Increased spacing between fields
  borderRadius: '10px', // More rounded corners
  border: '2px solid #e0e0e0', // Subtler border color
  boxSizing: 'border-box',
  fontSize: '16px', // Larger font size for readability
  transition: 'border-color 0.3s', // Smooth transition on focus
  ':focus': { // Enhance focus state
    borderColor: '#a0a0a0', // Darker border on focus
    outline: 'none' // Remove default focus outline
  },
};

const buttonStyle = {
  width: '100%',
  padding: '15px',
  marginTop: '20px',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  cursor: 'pointer',
  fontSize: '18px', // Larger font size for the button
  transition: 'background-color 0.3s', // Smooth background color transition
  ':hover': { // Hover effect
    backgroundColor: '#45a049', // Darker shade on hover
  },
};

// Apply these styles in your component accordingly.

export default RegisterPage;
