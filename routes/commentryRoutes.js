const express = require('express');
const router = express.Router();
const commentryControllerReference = require('../controllers/commentryController');
const authValidation = require('../helpers/tokenValidation');

// Get all the list which belongs to post collection
router.get('/commentryList', authValidation.authAdminLoginValidation, commentryControllerReference.commentryList)

// Add the post as new to post collection
router.post('/commentryList/:categoryId', authValidation.authAdminLoginValidation, commentryControllerReference.commentryAdd)

// Delete the exact post
router.delete('/commentryList/:commentryId', authValidation.authAdminLoginValidation, commentryControllerReference.commentryDelete)

// Updating the post using ID
router.patch('/commentryList/:commentryId', authValidation.authAdminLoginValidation, commentryControllerReference.commentryUpdate)

module.exports = router;