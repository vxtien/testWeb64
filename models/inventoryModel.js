const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({
  _id: Number,
  sku: String,
  description: String,
  instock: Number,
});

module.exports = mongoose.model('Inventory', inventorySchema);
