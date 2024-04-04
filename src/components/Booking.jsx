// Booking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from "../components/Sidebar/Category/Category";
import Price from "../components/Sidebar/Price/Price";
import Colors from "../components/Sidebar/Colors/Colors";
import './Booking.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Card = ({ img, title, price, productId }) => { 
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/product-info/${productId}`);
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <img src={img} alt={title} className="product-card-img" />
            <div className="product-card-info">
                <h3 className="product-card-title">{title}</h3>
                <p className="product-card-price">${price}</p>
            </div>
        </div>
    );
};

const Booking = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState(null);
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/get-products')
        .then(response => {
            console.log('Products:', response.data); 
            setProducts(response.data);
            setFilteredProducts(response.data);
        })
        .catch(error => console.error('Error fetching products:', error));
    }, []);
    
    const handlePriceRangeChange = (range) => {
        console.log("Selected price range in Booking:", range);
        setPriceRange(range);
        const filtered = products.filter(product => {
            if (range === 'all') {
                return true;
            } else if (range === '1000-5000') {
                return product.price >= 1000 && product.price <= 5000;
            } else if (range === '5000-10000') {
                return product.price >= 5000 && product.price <= 10000;
            } else if (range === '10000-15000') {
                return product.price >= 10000 && product.price <= 15000;
            } else if (range === '15000+') {
                return product.price >= 15000;
            }
            // Add a default return statement if no condition matches
            return false;
        });
        setFilteredProducts(filtered);
    };
    
    

    return (
        <div className="all">
            <div className="app-container">
                <Navbar />
                <br />
                <div className="booking-container">
                    <section className="sidebar">
                        <Category />
                        <Price handleChange={handlePriceRangeChange} />
                        <Colors />
                    </section>
                    <div className="cards-container__booking">
                        {filteredProducts.map((product) => (
                            <Card 
                                key={product.productId}
                                img={product.photos[0]} 
                                title={product.title}
                                price={product.price}
                                productId={product.productId} 
                            />
                        ))}
                    </div>
                </div>
                <br />
                <Footer />
            </div>    
        </div>
    );
};

export default Booking;
