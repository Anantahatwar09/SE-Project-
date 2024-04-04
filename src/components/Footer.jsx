import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import Vector from "../img/Vector.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import footerBg from "../img/footerBg.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-background inPhone py-20">
      <div className="footer-container">
        <div className="footer-section logo-section" onClick={() => navigate("/")}>
          <img src={logo} className="footerLogo" alt="" />
          <div>
            <h3 className="section-title">Krishi Sadhan</h3>
            <p className="section-text">Kisaan upkaran ka ek Matra Sadhan.</p>
          </div>
        </div>
        <div className="footer-section links-section">
        <div className="links-column">
          <div className="links-container">
            <ul className="links-list first-column">
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/market")}>Market</li>
            </ul>
            <ul className="links-list second-column">
              <li onClick={() => navigate("/support-center")}>Support Center</li>
              <li onClick={() => navigate("/help")}>Help Center</li>
              <li onClick={() => navigate("/partner-dispute")}>Partner Dispute</li>
              <li onClick={() => navigate("/Contactus")}>FAQs</li>
            </ul>
          </div>
        </div>

          <p className="feedback-text">Please provide us Feedback <button onClick={() => navigate("/feedback")}>HERE</button></p>
        </div>
        <div className="footer-section social-media-section">
          <h1 className="section-title">Give us a follow on social media</h1>
          <div className="social-icons">
            <img src={Vector} alt="" />
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
          </div>
          <button className="logout-button" onClick={() => {localStorage.removeItem('token');localStorage.removeItem('email');localStorage.removeItem('role');navigate('/login');}}>Logout</button>
          <p className="creator-text">Made by : <strong>Ananta</strong></p>
        </div>
        <div className="footer-section ministry-section">
          <img src={footerBg} alt="" className="ministry-logo" />
          <h1 className="ministry-title">Ministry of Skill Development and Entrepreneurship</h1>
        </div>

      </div>
    </div>
  );
};

export default Footer;
