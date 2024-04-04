import React from 'react';
import './Services.css'; // Make sure to update this CSS file accordingly
// import farmerIcon1 from '../img/logo.png'; // Ensure this icon fits the aesthetic

const servicesData = [
  { id: 1, title: 'Post Ads', description: 'A farmer creates a profile, advertisements are posted for agricultural equipment to rent for off-seasons.' },
  { id: 2, title: 'Browse and Filter', description: 'Explore varieties of farming equipment, also filter on basis of various parameters.' },
  { id: 3, title: 'Check availabilities', description: 'Check the available time and slots for the required equipments in order to book them.' },
  { id: 4, title: 'Book for certain timeline', description: 'Customers create a profile and book farming equipment for their own uses and benefits.' },
  { id: 5, title: 'Connect through Chats', description: 'Owners and customers connect through chats and can send voice messages to make deals.' },
  { id: 6, title: 'Notifications on updates', description: 'Get notified through the SMS for booking and other related information & updates.' },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <p>Discover the services that Krishi Sadhan market provides for Farmers:</p>
      <div className="services-container">
        {servicesData.map(service => (
          <div key={service.id} className="service-item">
            <div className="service-icon">
              {/* <img src={farmerIcon1} alt="Service Icon" /> */}
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
