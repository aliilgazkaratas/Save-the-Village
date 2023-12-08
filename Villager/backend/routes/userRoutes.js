const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get a specific user by ID
router.get('/users/:userId', userController.getUserById);

// Update a user by ID
router.put('/users/:userId', userController.updateUserById);

// Delete a user by ID
router.delete('/users/:userId', userController.deleteUserById);

module.exports = router;
