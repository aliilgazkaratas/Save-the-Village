// Validator function for checking if a string is a valid username format
const isValidUsername = (username) => {
    // Regular expression for username validation: allows alphanumeric characters and underscores
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
  };
  
  // Validator function for checking if a password meets specific criteria
  const isValidPassword = (password) => {
    // Password criteria: at least 8 characters, containing at least one uppercase, one lowercase, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  
  module.exports = { isValidUsername, isValidPassword };
  