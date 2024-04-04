import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css'; // Make sure this file path is correct
import Navbar from './Navbar';
import Footer from './Footer';

function Dashboard() {
    const [userDetails, setUserDetails] = useState(null);
    const [products, setProducts] = useState([]);

    const fetchProducts = async (token) => {
        try {
            const response = await axios.get('http://localhost:5000/api/products/get-userproduct', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token // Assuming you store the JWT token in local storage
                },
                params: {
                    userId: userDetails._id // Pass user ID as a query parameter
                }
            });
            setProducts(response.data);
        } catch (error) {
            // Handle error
            console.error('Failed to fetch products:', error);
        }
    };
    
    

    useEffect(() => {
        // Fetch user details from the server
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/users/userdetails', {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': token // Assuming you store the JWT token in local storage
                    }
                });
                setUserDetails(prevDetails => ({ ...prevDetails, ...response.data }));
                // Call fetchProducts here
                fetchProducts(token);
            } catch (error) {
                // Handle error
                console.error('Failed to fetch user details:', error);
            }
        };
    
        fetchUserDetails();
    }, []); 
    
    const handleDeleteProduct = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/products/delete-product/${productId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token // Assuming you store the JWT token in local storage
                }
            });
            // Remove the deleted product from the state
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            // Handle error
            console.error('Failed to delete product:', error);
        }
    };

    return (
        <>
            <Navbar />
            <br/>
            <div className="dashboard">
                {/* Sidebar starts */}
                <div className="sidebar">
                    <div className="logo">
                        {/* Put your logo here */}
                        <span>LOGO</span>
                    </div>
                    <div className="menu">
                        {/* Sidebar menu items */}
                        <a href="#" className="menu-item active">Content</a>
                        <a href="#" className="menu-item">Start Selling</a>
                        <a href="#" className="menu-item">My adds</a>
                        <a href="#" className="menu-item">Chat</a>
                        <a href="#" className="menu-item">Help</a>
                        {/* Add more menu items here */}
                    </div>
                </div>
                {/* Sidebar ends */}

                {/* Main content starts */}
                <div className="main-content">
                    {/* Add your main content here */}
                    <div className="header">
                        {/* Your header content like search, profile info, etc */}
                    </div>
                    <div className="content">
                        {/* Your page content goes here */}
                        <h1>Welcome</h1>
                        {/* Display the username below the welcome message */}
                        {userDetails && <p className="user-name">Hello, {userDetails.name}</p>}
                        {/* Display user's products */}
                        {products.length > 0 ? (
                            <div className="product-list">
                                <h2>Your Products:</h2>
                                <ul>
                                    {products.map(product => (
                                        <li key={product._id} className="product-item">
                                            <div className="product-details">
                                                <div>
                                                    <h3>{product.title}</h3>
                                                    <p>Price: ${product.price}</p>
                                                    <p>Description: {product.description}</p>
                                                </div>
                                                <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => handleDeleteProduct(product._id)} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>
                </div>
                {/* Main content ends */}
            </div>
            <br/>
            <Footer />
        </>    
    );
}

export default Dashboard;
