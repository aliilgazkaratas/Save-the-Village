exports.signup = async (req, res) => {
    try {
      const { username, email, password, villageId } = req.body;
      // Check if the email or username already exists in the database before creating a new user
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
        return res.status(400).json({ message: 'Email or username already exists' });
      }
      // Create new user and return JWT token upon successful registration
      const newUser = await User.create({ username, email, password, village: villageId });
      const token = generateToken(newUser._id); // Generate JWT token
      res.status(201).json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Find the user by email (assuming email is unique)
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // Validate password
      const validPassword = await user.comparePassword(password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // Generate JWT token upon successful login
      const token = generateToken(user._id); // Generate JWT token
      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  