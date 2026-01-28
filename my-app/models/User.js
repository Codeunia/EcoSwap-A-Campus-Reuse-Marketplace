import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  accountType: { type: String, enum: ["user", "admin"], required: true },
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  college: String,
  phone: String,
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
