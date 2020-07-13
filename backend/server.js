
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Fixtures = require('node-mongodb-fixtures');

const fixtures = new Fixtures({
  dir: path.resolve(path.join(__dirname, 'fixtures')),
});

const productsRoutes = require('./routes/products.routes');
const ProductModel = require('./models/product.model');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/shopproject', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', async () => {
  console.log('Successfully connected to the database');

  const products = await ProductModel.find();

  if (!products.length) {
    fixtures
      .connect('mongodb://localhost:27017/shopproject', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => fixtures.unload())
      .then(() => fixtures.load())
      .then(() => fixtures.disconnect());
  }

});

db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
