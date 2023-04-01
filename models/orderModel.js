const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: Number,
  item: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model('Order', orderSchema);
