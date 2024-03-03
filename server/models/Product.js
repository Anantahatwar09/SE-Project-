  const mongoose = require('mongoose');

  const productSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true, enum: ['Daily Rental', 'Hourly Rental'] },
    title: { type: String, required: true },
    equipmentType: { type: String, required: true },
    condition: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { 
      data: Buffer, 
      contentType: String 
    },
    // Assuming date range is stored as an object with start and end dates
    dateRange: {
      start: { type: Date, required: true },
      end: { type: Date, required: true }
    },
  }, { timestamps: true });

  const Product = mongoose.model('Product', productSchema);

  module.exports = Product;
