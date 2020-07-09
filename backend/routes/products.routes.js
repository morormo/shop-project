const express = require('express');
const router = express.Router();

const Post = require('../models/product.model');

router.get('/products', async (req, res) => {
  try {
    const result = await Post.find();
    if (!result) res.status(400).json({ product: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
