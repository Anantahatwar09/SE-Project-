// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const { addProduct } = require('../controllers/productController');
const upload = require('../controllers/uploadConfig'); // Adjust the path as necessary

// POST route for adding a new product
router.post('/add-product', upload.single('photo'), addProduct);

module.exports = router;
