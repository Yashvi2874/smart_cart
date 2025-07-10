import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: String,
  price: Number,
  quantity: String,
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Cart", cartSchema);
