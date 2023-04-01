const express = require('express');
const router = express.Router();
const inventoryModel = require('../models/inventoryModel');
const protect = require('../middleware/authMiddleware');

router.get('/', protect, async (req, res) => {
  try {
    const product = await inventoryModel.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

router.get('/less100', protect, async (req, res) => {
  try {
    const product = await inventoryModel.find({ instock: { $lt: 100 } });
    res.status(200).json(product);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

module.exports = router;
