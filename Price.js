// Price.js
import React from 'react';
import Input from "../../product component/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  const handleRangeChange = (event) => {
    const range = event.target.value;
    console.log("Selected price range:", range);
    handleChange(range); // Pass the selected range to the parent component
  };

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={handleRangeChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleRangeChange}
        value={50}
        title="1000 - 5000"
        name="test2"
      />

      <Input
        handleChange={handleRangeChange}
        value={100}
        title="5000 - 10000"
        name="test2"
      />

      <Input
        handleChange={handleRangeChange}
        value={150}
        title="10000 - 15000"
        name="test2"
      />

      <Input
        handleChange={handleRangeChange}
        value={200}
        title="Over 15000"
        name="test2"
      />
    </div>
  );
};

export default Price;
