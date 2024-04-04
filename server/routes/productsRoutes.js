const express = require('express');
const router = express.Router();
const { addProduct, getProducts, getProductInfo,getUserProduct,getOwnerName } = require('../controllers/productController');
const upload = require('../controllers/uploadConfig');


// Routes for handling product-related requests
router.post('/add-product', upload, addProduct);
router.get('/get-products', getProducts);
router.get('/product-info/:productId', getProductInfo);
router.get('/get-userproduct', getUserProduct);
router.get('/get-username',getOwnerName);


module.exports = router;
