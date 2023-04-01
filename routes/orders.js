const express = require('express');
const protect = require('../middleware/authMiddleware');
const orderModel = require('../models/orderModel');
const router = express.Router();

// router.get('/', protect, async (req, res) => {
//   const orders = await orderModel.find({}).populate('Inventory');
//   if (orders) {
//     res.status(200).json(orders);
//   } else {
//     res.status(400).send('Error get order');
//   }
// });

module.exports = router;
