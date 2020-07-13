const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: { type: String },
  id: { type: Number, required: true },
  name: { type: String, require: true },
  price: { type: String },
  image: { type: String },
  countInStock: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);
