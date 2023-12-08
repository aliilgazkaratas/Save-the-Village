const mongoose = require('mongoose');

const villageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  country: String, // If villages are associated with specific countries

  // Example of defining members within a village
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  }],

  // Other fields for village details
  // For example:
  // population: Number,
  // establishedDate: Date,
  // leader: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
});

const Village = mongoose.model('Village', villageSchema);

module.exports = Village;

