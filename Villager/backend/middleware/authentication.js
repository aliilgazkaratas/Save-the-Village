const { verifyToken } = require('../config/auth');
const User = require('../models/User'); // Import the User model (assuming it exists)

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token not provided' });
  }

  const userId = verifyToken(token);

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }

  try {
    // Fetch the user from the database using the userId obtained from the token
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized - User not found' });
    }

    // Attach the user object to the request for further use in subsequent middleware or routes
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = authenticateUser;
