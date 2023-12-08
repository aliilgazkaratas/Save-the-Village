const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateUser = require('../middlewares/authenticateUser');

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

// Example protected route requiring authentication middleware
router.get('/profile', authenticateUser, authController.getUserProfile);

module.exports = router;
