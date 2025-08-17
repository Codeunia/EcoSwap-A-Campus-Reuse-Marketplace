import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, maxlength: 500 },
    category: { type: String, required: true },
    condition: { type: String, required: true },
    type: { type: String, enum: ["sell", "donate", "swap"], required: true },
    price: { type: Number, required: true },
    photos: [{ type: String }], 
    contactMethod: { type: String, required: true },
    meetingLocation: { type: String },
    availability: { type: String },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
