const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    min: 6,
    max: 255,
  },
  description: {
    type: String,
    required: false,
    min: 6,
    max: 255,
  },
  stores: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      shipping: {
        type: Number,
        required: true,
        min: 0,
      },
      url: {
        type: String,
        requried: true,
      },
    },
  ],
});

module.exports = mongoose.model('product', productSchema);
