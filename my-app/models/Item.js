import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      lowercase: true,
    },

    condition: {
      type: String,
      required: true,
      enum: ["new", "used", "fair"],
    },

    type: {
      type: String,
      enum: ["sell", "donate", "swap"],
      required: true,
    },

    price: {
      type: Number,
      default: null,
      min: 0,
    },

    photos: {
      type: [String],
      default: [],
    },

    contactMethod: {
      type: String,
      enum: ["message", "email", "phone"],
      required: true,
    },

    email: {
      type: String,
      default: null,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      default: null,
      trim: true,
    },

    availability: {
      type: String,
      default: "flexible",
      enum: ["flexible", "weekdays", "weekends", "evenings"],
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reviews: [
    {
      userId: String,
      userName: String,
      rating: Number,
      comment: String,
      createdAt: Date,
    }
  ],
    views: { 
      type: Number, 
      default: 0 
    },
    likes: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        default : [] , 
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
