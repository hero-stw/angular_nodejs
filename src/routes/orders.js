import express from "express";
import {
  getOrders,
  getOrder,
  createClientOrder,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/order";

const router = express.Router();

router.get("/orders", getOrders);
router.get("/orders/:id", getOrder);
router.post("/orders/client-order", createClientOrder);
router.put("/orders/update-status/:id", updateOrderStatus);
router.delete("/orders/:id", deleteOrder);

export default router;
