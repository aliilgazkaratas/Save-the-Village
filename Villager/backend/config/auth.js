const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  // Generate a JWT token with an expiration time of 1 hour
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    // Verify the JWT token using the secret key stored in the environment variable
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
