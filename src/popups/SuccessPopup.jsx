import React from 'react';
import './SuccessPopup.css'; // You can use separate CSS files for each component if you want

function SuccessPopup({ message }) {
    return (
        <div className="popup success-popup">
            {message}
        </div>
    );
}

export default SuccessPopup;
