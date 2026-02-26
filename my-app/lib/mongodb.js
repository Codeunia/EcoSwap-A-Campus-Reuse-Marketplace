import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export default async function connectDB() {
  if (!MONGODB_URI) {
    console.warn(
      "MONGODB_URI is not set. Skipping DB connection.\nSet MONGODB_URI in your environment (Vercel dashboard) to connect at runtime."
    );
    return;
  }

  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}
