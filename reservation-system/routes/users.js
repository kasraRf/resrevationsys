// routes/users.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// مثال: GET /api/users/profile
router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
