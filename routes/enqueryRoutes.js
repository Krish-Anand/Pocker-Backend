const express = require('express');
const router = express.Router();
const authValidation = require('../helpers/tokenValidation')
const enqueryControllerReference = require('../controllers/enqueryController');

// Get all the list which belongs to post collection
router.get('/enqueryList', authValidation.authUserLoginValidation, enqueryControllerReference.enqueryList)

// Add the post as new to post collection
router.post('/enqueryList/:productId', authValidation.authUserLoginValidation, enqueryControllerReference.enqueryAdd)

module.exports = router;