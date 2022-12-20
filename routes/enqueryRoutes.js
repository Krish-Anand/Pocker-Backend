const express = require('express');
const router = express.Router();

const enqueryControllerReference = require('../controllers/enqueryController');

// Get all the list which belongs to post collection
router.get('/enqueryList', enqueryControllerReference.enqueryList)

// Add the post as new to post collection
router.post('/enqueryList/:productId', enqueryControllerReference.enqueryAdd)

module.exports = router;