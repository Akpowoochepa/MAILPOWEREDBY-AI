const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/test';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {});
    console.log('MongoDB connected…');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
