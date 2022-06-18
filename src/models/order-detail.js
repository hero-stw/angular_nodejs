import mongoose, { Schema } from "mongoose";

const { ObjectId } = mongoose.Types;
const OrderDetailSchema = new Schema(
  {
    orderId: {
      type: ObjectId,
      ref: "Order",
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("OrderDetail", OrderDetailSchema);
