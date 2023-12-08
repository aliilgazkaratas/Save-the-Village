const Village = require('../models/village');

// Create a new village
exports.createVillage = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newVillage = await Village.create({ name, description });
    res.status(201).json(newVillage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a new village' });
  }
};

// Get all villages
exports.getAllVillages = async (req, res) => {
  try {
    const villages = await Village.find();
    res.status(200).json(villages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch villages' });
  }
};

// Other CRUD operations for villages (update, delete) can be added similarly
