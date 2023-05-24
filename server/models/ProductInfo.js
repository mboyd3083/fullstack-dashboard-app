import mongoose from "mongoose";

const ProductInfoSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
export default ProductInfo;