import React, { useState } from 'react';
import './Help.css'; // Make sure to create this CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = {
    booking: [
      { question: 'How do I book an equipment on Krishi Sadhan?', answer: 'Booking instructions...' },
      { question: 'What happens if I return the equipment late?', answer: 'Late return policy...' },
      { question: 'How do I lend my booking?', answer: 'Lending instructions...' },
    ],
    renting: [
      { question: 'How can I rent my equipment or implements?', answer: 'Renting instructions...' },
      { question: 'How do I refund my amount?', answer: 'Refund process...' },
      { question: 'What types of equipment can I list for booking?', answer: 'Equipment listing guidelines...' },
    ],
  };

  const handleClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
        <Navbar />
        <div className="faq-section">
        <h2>How can we Help?</h2>
        <div className="faq-container">
            <div className="faq-block">
            <h3>Booking Help</h3>
            {questionsAnswers.booking.map((qa, index) => (
                <div key={index} className="faq-question" onClick={() => handleClick(index)}>
                <p>Q: {qa.question}</p>
                {activeIndex === index && <p>{qa.answer}</p>}
                </div>
            ))}
            </div>
            <div className="faq-block">
            <h3>Renting Help</h3>
            {questionsAnswers.renting.map((qa, index) => (
                <div key={index + questionsAnswers.booking.length} className="faq-question" onClick={() => handleClick(index + questionsAnswers.booking.length)}>
                <p>Q: {qa.question}</p>
                {activeIndex === index + questionsAnswers.booking.length && <p>{qa.answer}</p>}
                </div>
            ))}
            </div>
        </div>
        <button className="contact-us">Contact Us</button>
        </div>
        <Footer />
    </>    
  );
};

export default FAQSection;
