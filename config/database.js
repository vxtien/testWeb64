const mongoose = require('mongoose');

const connectDB = () => {
  try {
    mongoose.connect('mongodb://127.0.0.1/test-web64').then((res) => {
      console.log('Connect success');
    });
  } catch (error) {
    console.log('Error connect');
  }
};

module.exports = connectDB;
