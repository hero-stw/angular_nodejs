import mongoose, { Schema } from "mongoose";

const { ObjectId } = mongoose.Types;
const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      // minlength: 5,
      // maxlength: 32,
    },
    price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", BookSchema);
