import React, { useState} from 'react';
import './DeliveryForm.css'; // Import the CSS styles
import { Link, useLocation } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';

const DeliveryForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get('price');
  console.log(price)

  const [chatOpen, setChatOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [messages, setMessages] = useState([]); // Added state for messages
  const [newMessage, setNewMessage] = useState(''); // Added state for newMessage


  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        () => {
          alert("Unable to retrieve your location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  const deliveryCharge = 3000;

  // Calculate total payable
  const totalPayable = parseFloat(price) + deliveryCharge;

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent form submission
    
    if (!newMessage.trim()) return; // Avoid sending empty messages

    // Add the new message to the messages array
    setMessages([...messages, { id: Date.now(), text: newMessage }]);
    setNewMessage(''); // Clear the input after sending
  };

  return (
    <>
      <Navbar />
      <div className="delivery-container">
        <div className="delivery-address">
          <h2>DELIVERY ADDRESS</h2>
          <form className='formdev'>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="10-digit mobile number" />
            <input type="text" placeholder="Pincode" />
            <input type="text" placeholder="Locality" />
            <input type="text" placeholder="Address (Area and Street)" />
            <input type="text" placeholder="City/District/Town" />
            <button type="button" onClick={getCurrentLocation} className="location-button">
              Use Current Location
            </button>
            {currentLocation && (
              <p>Current Location: {currentLocation}</p>
            )}
            <select>
              <option>--Select State--</option>
              {/* Add state options here */}
            </select>
            <input type="text" placeholder="Landmark (Optional)" />
            <input type="text" placeholder="Alternate Phone (Optional)" />
            <div className="address-type">
              <input type="radio" id="home" name="address_type" />
              <label htmlFor="home">Home (All day delivery)</label>
              <input type="radio" id="work" name="address_type" />
              <label htmlFor="work">Work (Delivery between 10 AM - 5 PM)</label>
            </div>
            <Link to="/paymentoption" className="submit-button">SAVE AND Proceed to pay</Link>
          </form>
        </div>
        <div className="payment-details">
          <h2>PRICE DETAILS</h2>
          <div className="price-item">
            <span>Price (1 item)</span>
            <span>{price}</span>
          </div>
          <div className="delivery-charges">
            <span>Delivery Charges</span>
            <span>3000</span>
          </div>
          <div className="total-payable">
            <span>Total Payable</span>
            <span>{totalPayable }</span>
          </div>
          <div className="secure-payment">
            <span>Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
          </div>
        </div>
        <div className={`chat-button ${chatOpen ? 'hide' : ''}`} onClick={toggleChat}>
          Chat with owner
        </div>
        {chatOpen && (
          <div className="chat-window">
            <div className="chat-header" onClick={toggleChat}>
              Need Help? Chat with us!
            </div>
            <div className="chat-messages">
              {messages.map((message) => (
                <div key={message.id} className="chat-message">
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input
                type="text"
                className="chat-input"
                placeholder="Type your message here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="submit" className="send-message-button">Send</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DeliveryForm;