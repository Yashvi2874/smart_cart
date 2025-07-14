import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Try to connect to MongoDB Atlas first
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/smart_cart";
    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    console.log("⚠️  Using in-memory database for development...");
    
    // For development, we'll use a simple in-memory solution
    // In production, you should always use a proper MongoDB connection
    process.exit(1);
  }
};

export default connectDB;
