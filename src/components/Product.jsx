// src/Product.js
import React from 'react';
import './Product.css'; 

const Product = ({ name, price, originalPrice, rating, imageUrl }) => {
  return (
    <>
      <div className="product">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <div className="price">
          <span className="sale-price">${price}</span>
          <span className="original-price">${originalPrice}</span>
        </div>
        <div className="rating">{`Rating: ${rating}`}</div>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <div className="price">
          <span className="sale-price">${price}</span>
          <span className="original-price">${originalPrice}</span>
        </div>
        <div className="rating">{`Rating: ${rating}`}</div>
        <button>Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
