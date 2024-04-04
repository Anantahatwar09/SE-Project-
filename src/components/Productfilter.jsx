import React, { useState } from 'react';
import './Productfilter.css'; // Assume your CSS file for styling the grid and filters

const ProductGrid = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filters, setFilters] = useState({
        price: '',
        company: '',
        city: '',
        distance: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const applyFilters = () => {
        let updatedProducts = products.filter(product =>
            (filters.price ? product.price <= filters.price : true) &&
            (filters.company ? product.company === filters.company : true) &&
            (filters.city ? product.city === filters.city : true) &&
            (filters.distance ? product.distance <= filters.distance : true)
        );
        setFilteredProducts(updatedProducts);
    };

    return (
        <div>
            <div className="filters">
                <input
                    name="price"
                    type="number"
                    value={filters.price}
                    onChange={handleFilterChange}
                    placeholder="Max Price"
                />
                <input
                    name="company"
                    type="text"
                    value={filters.company}
                    onChange={handleFilterChange}
                    placeholder="Company"
                />
                <input
                    name="city"
                    type="text"
                    value={filters.city}
                    onChange={handleFilterChange}
                    placeholder="City"
                />
                <input
                    name="distance"
                    type="number"
                    value={filters.distance}
                    onChange={handleFilterChange}
                    placeholder="Max Distance (km)"
                />
                <button onClick={applyFilters}>Apply Filters</button>
            </div>
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Company: {product.company}</p>
                        <p>City: {product.city}</p>
                        <p>Distance: {product.distance} km</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;

