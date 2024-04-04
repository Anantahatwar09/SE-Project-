const Product = require('../models/Product');
const upload = require('./uploadConfig'); // This might need to stay in routes due to how middleware works
const mongoose = require('mongoose');
const fs = require('fs');
const jwt = require('jsonwebtoken'); // Import JWT

exports.addProduct = async (req, res) => {
  try {
    // Extract user ID from JWT token
    const token = req.header('Authorization').split(' ')[1]; // Extract the token part from the header
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const userId = decoded.user.id;

    // Other fields remain the same
    const { brand, location, category, title, equipmentType, condition, description, price, dateRange } = req.body;
  
    // Convert uploaded files to Base64 strings
    const photosBase64 = req.files.map(file => {
      // Convert file buffer to Base64
      const img = fs.readFileSync(file.path);
      return `data:${file.mimetype};base64,${img.toString('base64')}`;
    });
  
    const [startDate, endDate] = JSON.parse(dateRange);
  
    const newProduct = new Product({
      user: userId, // Associate the product with the logged-in user
      brand,
      location,
      category,
      title,
      equipmentType,
      condition,
      description,
      price,
      photos: photosBase64, // Store Base64 strings
      dateRange: { start: startDate, end: endDate }
    });
  
    await newProduct.save();
    res.status(200).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to add product', error: error.toString() });
  }
};




exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Fetch all products from the database

    // No need to transform product photos here if they are already in Base64 format
    const transformedProducts = products.map(product => ({
        title: product.title,
        photos: product.photos, // Assuming these are Base64 strings
        condition: product.condition, // Fixed typo from 'Contition' to 'condition'
        price: product.price,
        productId: product._id,
    }));

    res.status(200).json(transformedProducts); // Send the array of products back to the client
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Failed to fetch products', error: error.toString() });
  }
};



exports.getProductInfo = async (req, res) => {
  try {
    const productId = req.params.productId; // No need to convert to ObjectId
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // If the product is found, return it as a response
    res.status(200).json({ product });
  } catch (error) {
    console.error('Error retrieving product information:', error);
    res.status(500).json({ message: 'Failed to retrieve product information', error: error.toString() });
  }
};

exports.getUserProduct = async (req, res) => {
  try {
      const userId = req.query.userId; // Get userId from query parameters
      const products = await Product.find({ user: userId }); // Find products associated with the given userId
      res.json(products);
  } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
  }
};

exports.getOwnerName = async (req, res) => {
  try {
    const productId = req.params.productId;
    
    // Find the product by ID
    const product = await Product.findById(productId);
    
    // If product is not found, return an error
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // Find the owner by user ID associated with the product
    const owner = await User.findById(product.user);
    
    // If owner is not found, return an error
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    
    // Return the owner's name
    res.status(200).json({ ownerName: owner.name });
  } catch (error) {
    console.error('Error retrieving owner name:', error);
    res.status(500).json({ message: 'Failed to retrieve owner name', error: error.toString() });
  }
};