import mongoose, { Schema } from "mongoose";

const { ObjectId } = mongoose.Types;
const OrderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
