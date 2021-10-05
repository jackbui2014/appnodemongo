import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ProductSchema = new Schema({
  name: { type: String },
  description: { type: String },
  category: { type: String },
  price: { type: String },
  created_date: { type: Date, default: Date.now() }
});
export const Product = mongoose.model('Product', ProductSchema);
