// Importing the helper and validator functions
const { formatDate, generateRandomId } = require('../utils/helpers');
const { isValidUsername, isValidPassword } = require('../utils/validators');
const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!isValidUsername(username)) {
      return res.status(400).json({ error: 'Invalid username format' });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({ error: 'Password should be at least 8 characters long' });
    }

    // Utilizing helper functions to format date and generate random ID
    const newUser = await User.create({
      username,
      password,
      createdDate: formatDate(Date.now()), // Format date before storing in the database
      userId: generateRandomId(), // Generate a random ID for the user
    });

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
