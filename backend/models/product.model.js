const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: String },
  image: { type: String },
  countInStock: { type: Number },
});

module.exports = mongoose.model('Post', productSchema);
