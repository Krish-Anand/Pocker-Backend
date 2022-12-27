const express = require('express');
const router = express.Router();
const categoryControllerReference = require('../controllers/categoryController');
const authValidation = require('../helpers/tokenValidation');

// Get all the list which belongs to post collection
router.get('/caegoryList', authValidation.authAdminLoginValidation, categoryControllerReference.categoryList)

// Add the post as new to post collection
router.post('/caegoryList', authValidation.authAdminLoginValidation, categoryControllerReference.categoryAdd)

// Delete the exact post
router.delete('/caegoryList/:categoryId', authValidation.authAdminLoginValidation, categoryControllerReference.categoryDelete)

// Updating the post using ID
router.patch('/caegoryList/:categoryId', authValidation.authAdminLoginValidation, categoryControllerReference.categoryUpdate)

module.exports = router;