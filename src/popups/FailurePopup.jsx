import React from 'react';
import './FailurePopup.css'; // Separate CSS file for failure popup

function FailurePopup({ message }) {
    return (
        <div className="popup failure-popup">
            {message}
        </div>
    );
}

export default FailurePopup;
