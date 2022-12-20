const express = require('express');
const router = express.Router();
const productControllerReference = require('../controllers/productController');

// Get all the list which belongs to post collection
router.get('/productsList', productControllerReference.productList)

// Add the post as new to post collection
router.post('/productsList', productControllerReference.productAdd)

// Get actually what you need as specific post
router.get('/productsList/:productId', productControllerReference.oneProductDetails)

// Delete the exact post
router.delete('/productsList/:productId', productControllerReference.productDelete)

// Updating the post using ID
router.patch('/productsList/:productId', productControllerReference.productUpdate)

module.exports = router;