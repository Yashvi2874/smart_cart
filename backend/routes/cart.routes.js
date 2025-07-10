import express from "express";
import {addToCart, getCart,removeFromCart,getCartTotal} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/total", getCartTotal);
router.post("/", addToCart);
router.get("/", getCart);
router.delete("/:index", removeFromCart);


export default router;
