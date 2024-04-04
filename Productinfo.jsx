import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Productinfo.css';
import Navbar from './Navbar';
import Footer from './Footer';


const ProductInfo = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [ownerName, setOwnerName] = useState('');
    const [product, setProduct] = useState(null); 
    const [activeImage, setActiveImage] = useState('');
    const [price, setPrice] = useState(0); // State to hold the price

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/product-info/${productId}`)
            .then(response => {
                const fetchedProduct = response.data.product;
                setProduct(fetchedProduct);
                setPrice(fetchedProduct.price); // Set the price when product data is fetched
                console.log(fetchedProduct.price);
                if (fetchedProduct.photos && fetchedProduct.photos.length > 0) {
                    // setActiveImage(fetchedProduct.photos[0]);
                    setActiveImage(fetchedProduct.photos[0]);
                }
                
                // Fetch owner's name using axios
                axios.get(`http://localhost:5000/api/products/get-username/${fetchedProduct.user}`)
                    .then(ownerResponse => {
                        setOwnerName(ownerResponse.data.ownerName);
                    })
                    .catch(error => console.error('Error fetching owner name:', error));
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    const changeImage = (imageUrl) => {
        setActiveImage(imageUrl);
    };

    const handleBookNow = () => {
        navigate(`/deliveryfrom?price=${price}`);
    };

    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            <Navbar />
            <div className="productInfo-page">
                <main className="productInfo-container">
                    <div className="productInfo-images">
                        <img src={activeImage} alt="Active Product" className="productInfo-activeImage"/>
                        <div className="productInfo-thumbnails">
                            {product.photos.map((image, index) => (
                                <img key={index} src={image} alt={`Product Thumbnail ${index + 1}`} onClick={() => changeImage(image)} className="productInfo-thumbnail"/>
                            ))}
                        </div>
                    </div>
                    <div className="productInfo-details">
                        <h1 className="productInfo-title">{product.title}</h1>
                        <h2 className="productInfo-price">${product.price}</h2>
                        <p className="productInfo-description">{product.description}</p>
                        <p><strong>Owner Name:</strong> {ownerName}</p>
                        <p><strong>Location:</strong> {product.location}</p>
                        <p><strong>Available:</strong> {product.dateRange.start} - {product.dateRange.end}</p>
                        <p><strong>Type:</strong> {product.category}</p>
                        <button onClick={handleBookNow} className="productInfo-addToCart">Book now</button>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default ProductInfo;
