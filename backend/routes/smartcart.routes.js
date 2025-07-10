import express from "express";
import { generateSmartCart } from "../controllers/smartcart.controller.js";

const router = express.Router();

router.post("/", generateSmartCart);

export default router;
