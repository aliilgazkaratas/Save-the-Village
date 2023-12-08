const express = require('express');
const app = express();
const villageRoutes = require('./routes/villageRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware for parsing JSON data
app.use(express.json());

// Routes
app.use('/api', villageRoutes);
app.use('/api', userRoutes);

// Additional middleware for error handling, authentication, etc.
// Example:
// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Other middleware and setup can be added as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
