// controllers/productController.js
const Product = require('../models/Product'); // Adjust the path as necessary
const upload = require('./uploadConfig'); // This might need to stay in routes due to how middleware works

// Controller for adding a new product
exports.addProduct = async (req, res) => {
  try {
    const { brand, location, category, title, equipmentType, condition, description, price, dateRange } = req.body;
    const photoPath = req.file ? req.file.path : null;

    // Parse the dateRange string into an array of dates
    const [startDate, endDate] = JSON.parse(dateRange);

    const newProduct = new Product({
      brand,
      location,
      category,
      title,
      equipmentType,
      condition,
      description,
      price,
      photo: photoPath,
      dateRange: { start: startDate, end: endDate } // Construct the dateRange object
    });
    
    // Save the new product
    const savedProduct = await newProduct.save();

    // Log the saved product
    console.log('Product saved successfully:', savedProduct);

    // Send success response
    res.status(200).json({ message: 'Product added successfully', product: savedProduct });
  } catch (error) {
    // Log the error
    console.error('Error adding product:', error);

    // Send error response
    res.status(500).json({ message: 'Failed to add product', error: error.toString() });
  }
};
