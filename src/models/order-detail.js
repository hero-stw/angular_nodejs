import mongoose, { Schema } from "mongoose";
import BookSchema from "./book";

const { ObjectId } = mongoose.Types;
const OrderDetailSchema = new Schema(
  {
    orderId: {
      type: ObjectId,
      ref: "Order",
    },
    products: [BookSchema],
  },
  { timestamps: true }
);
export default mongoose.model("OrderDetail", OrderDetailSchema);
