import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  unit: String,
  category: String,
  imageUrl: String,
  tags: [String],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
