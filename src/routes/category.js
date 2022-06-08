import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/category";

const router = Router();

router.get("/category", getCategories);

router.get("/category/:id", getCategory);

router.delete("/category/:id", deleteCategory);

router.post("/category", addCategory);

router.put("/category/:id", updateCategory);

export default router;
