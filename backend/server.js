import express from "express";
import dotenv from "dotenv";
import cors from "cors";   
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import smartCartRoutes from "./routes/smartcart.routes.js";
import cartRoutes from "./routes/cart.routes.js";


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

global.cart = [];

app.use("/api/products", productRoutes);
app.use("/api/smart-cart", smartCartRoutes);
app.use("/api/cart", cartRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});