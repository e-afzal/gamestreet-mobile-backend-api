import mongoose from "mongoose";

const accessorySchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productFeatures: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
    },
    productImages: [String],
    platform: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Platform",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// 'ACCESSORY' Model
const Accessory = mongoose.model("Accessory", accessorySchema);

export default Accessory;
