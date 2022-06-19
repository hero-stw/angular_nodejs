import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const OrderSchema = new mongoose.Schema(
  {
    products: [
      {
        _id: {
          type: ObjectId,
          ref: "Book",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    price: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "confirm", "shipping", "done", "close"],
      default: "pending",
    },
    shippingInfo: {
      fullname: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
      email: {
        type: String,
      },
      address: {
        type: String,
      },
      note: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
