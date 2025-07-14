import express from "express";
import {addToCart, getCart, removeFromCart, getCartTotal, clearCart, updateCartItem} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/total", getCartTotal);
router.post("/", addToCart);
router.get("/", getCart);
router.delete("/:index", removeFromCart);
router.delete("/", clearCart);
router.put("/:index", updateCartItem);

export default router;
