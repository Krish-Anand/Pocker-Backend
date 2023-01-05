const express = require('express');
const router = express.Router();
const authControllerReference = require('../controllers/authController');


router.post('/register', authControllerReference.registerController)

router.post('/login', authControllerReference.loginController)

router.post('/guest', authControllerReference.guestController)

module.exports = router