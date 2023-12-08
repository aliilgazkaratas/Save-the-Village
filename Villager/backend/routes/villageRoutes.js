const express = require('express');
const router = express.Router();
const villageController = require('../controllers/villageController');

// Create a new village
router.post('/villages', villageController.createVillage);

// Get all villages
router.get('/villages', villageController.getAllVillages);

// Get a specific village by ID
router.get('/villages/:villageId', villageController.getVillageById);

// Update a village by ID
router.put('/villages/:villageId', villageController.updateVillageById);

// Delete a village by ID
router.delete('/villages/:villageId', villageController.deleteVillageById);

module.exports = router;
