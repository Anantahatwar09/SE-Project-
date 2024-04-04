import React from 'react';
import './CustomerSupportCards.css'; // Ensure you have this CSS file

const CustomerSupportCards = () => {
  const cardsData = [
    { id: 1, icon: '📞', title: '24*7 Customer Support', description: "We're just one call away." },
    { id: 2, icon: '💬', title: '24*7 Customer Support', description: "We're just one call away." },
    { id: 3, icon: '✅', title: '24*7 Customer Support', description: "We're just one call away." },
  ];

  return (
    <div className="cards-container__customer_support">
      {cardsData.map(card => (
        <div className="card_customer" key={card.id}>
          <div className="icon">{card.icon}</div>
          <div className="content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerSupportCards;
