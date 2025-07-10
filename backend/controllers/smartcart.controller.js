import Product from "../models/Product.model.js";
import { cart } from "./cart.controller.js"; //  only if cart is exported from there

export const generateSmartCart = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const lowerPrompt = prompt.toLowerCase();

    //  Extract number of items requested
    const numberMatch = lowerPrompt.match(/\b(\d+)\b/);
    const limit = numberMatch ? parseInt(numberMatch[1]) : 3;

    //  Extract price constraint
    const priceMatch = lowerPrompt.match(/under\s*(₹?\s*\d+)/);
    const maxPrice = priceMatch ? parseInt(priceMatch[1].replace(/[^\d]/g, "")) : Infinity;

    //  Extract tags/keywords
    const keywords = lowerPrompt.split(/\s+/);
    const knownTags = [
      "budget", "healthy", "party", "protein", "vegetarian", "non-veg", "quick", "snack", "daily",
      "cool", "hot", "must-have", "sweet", "crunchy", "bake", "omega-3", "basic", "leafy"
    ];
    const tagMatches = keywords.filter(word => knownTags.includes(word));

    // 4Build query
    const query = { price: { $lte: maxPrice } };
    if (tagMatches.length > 0) {
      query.tags = { $in: tagMatches };
    }

    const products = await Product.find(query).limit(limit);

    // Format and add to cart
    const smartCart = [];

    for (const product of products) {
      const existing = cart.find((item) => item.productId === product._id.toString());

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          productId: product._id.toString(),
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      smartCart.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: "1 unit",
      });
    }

    res.json({ smartCart, cart });

  } catch (err) {
    console.error("❌ Smart cart error:", err);
    res.status(500).json({ error: "Failed to generate smart cart", details: err.message });
  }
};
