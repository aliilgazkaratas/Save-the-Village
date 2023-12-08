// Helper function for formatting date
const formatDate = (date) => {
    if (!date) return null;
    try {
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      return formattedDate;
    } catch (error) {
      console.error('Error formatting date:', error);
      return null;
    }
  };
  
  // Helper function for generating a random ID
  const generateRandomId = (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      randomId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomId;
  };
  
  module.exports = { formatDate, generateRandomId };
  