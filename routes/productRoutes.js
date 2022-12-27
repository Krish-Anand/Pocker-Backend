const express = require('express');
const router = express.Router();
const productControllerReference = require('../controllers/productController');
const authValidation = require('../helpers/tokenValidation')

// Get all the list which belongs to post collection
router.get('/productsList', authValidation.authAdminLoginValidation || authValidation.authUserLoginValidation, productControllerReference.productList)

// Add the post as new to post collection
router.post('/productsList', authValidation.authAdminLoginValidation, productControllerReference.productAdd)

// Get actually what you need as specific post
router.get('/productsList/:productId', authValidation.authAdminLoginValidation || authValidation.authUserLoginValidation, productControllerReference.oneProductDetails)

// Delete the exact post
router.delete('/productsList/:productId', authValidation.authAdminLoginValidation, productControllerReference.productDelete)

// Updating the post using ID
router.patch('/productsList/:productId', authValidation.authAdminLoginValidation, productControllerReference.productUpdate)

module.exports = router;