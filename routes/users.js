const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (user && user.password === password) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      token: jwt.sign({ id: user._id }, 'masobimat'),
    });
  } else {
    res.status(400).send('Username or password incorrect');
  }
});

module.exports = router;
