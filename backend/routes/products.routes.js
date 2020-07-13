const express = require('express');
const router = express.Router();

const ProductModel = require('../models/product.model');

router.get('/products/:id', async (req, res) => {
  try {
    const result = await ProductModel.findById(req.params.id);
    if (!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/products', async (req, res) => {
  try {
    const result = await ProductModel.find();
    if (!result) res.status(400).json({ product: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
