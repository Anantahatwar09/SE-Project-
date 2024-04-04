import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginRoute } from '../utils/APIroutes';
import './login.css'


function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setRole] = useState('buyer'); // Default to 'buyer'


  useEffect(() => {
    document.body.style.backgroundImage = `url(${require('../img/back.jpg')})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.margin = '0';
    document.body.style.height = '100vh';
    document.body.style.backgroundRepeat = 'no-repeat';

    return () => {
      document.body.style.background = 'none';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch(loginRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Something went wrong');
      }
      localStorage.setItem('email', email); 
      localStorage.setItem('role', role); 
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
};



  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <img src={require('../img/logo.png')} alt="Logo" style={{ width: '150px', marginBottom: '30px' }} />
        <h1 style={{ marginBottom: '30px', fontSize: '1.9rem', fontWeight: 'bold' }}>Login Here</h1>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyle}
        />
        <div className="role-toggle">
          <span style={{ marginRight: '10px' }}>Buyer</span>
          <label className="switch">
            <input type="checkbox" checked={role === 'owner'} onChange={() => setRole(role === 'buyer' ? 'owner' : 'buyer')} />
            <span className="slider round"></span>
          </label>
          <span style={{ marginLeft: '10px' }}>Owner</span>
        </div>

        <button type="submit" style={buttonStyle}>Login</button>
        <p style={{ marginTop: '10px' }}>Don't have an account? <Link to="/register">Register here</Link>.</p>
      </form>
    </div>
  );
}

// Common styles for both Register and Login forms
const formStyle = {
  background: 'rgba(255, 255, 255, 0.85)', // More transparency
  padding: '20px 40px', // Responsive padding
  borderRadius: '20px', // More rounded corners
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)', // Softer shadow
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '350px', // Slightly wider
  color: '#333', // Darker font color for better readability
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // Modern font
};

const inputStyle = {
  width: '100%',
  padding: '15px', // Larger padding for input
  marginBottom: '10px', // More space between inputs
  borderRadius: '10px', // Rounded inputs
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  fontSize: '16px', // Larger font size
};

const buttonStyle = {
  width: '100%',
  padding: '15px', // Thicker button for better clickability
  marginTop: '10px', // Reduced space above the button
  border: 'none',
  borderRadius: '10px', // Rounded button
  backgroundColor: '#4CAF50', // Bootstrap primary color
  color: 'white',
  cursor: 'pointer',
  fontSize: '18px', // Larger font size for button
  transition: 'background-color 0.2s', // Smooth transition on hover
  ':hover': {
    backgroundColor: '#4CAF50', // Darken button color on hover
  },
};

export default LoginPage;
