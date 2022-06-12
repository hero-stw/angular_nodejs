import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  signin,
  signup,
  updateUser,
} from "../controllers/auth";
const router = Router();

router.post("/login", signin);

router.post("/signup", signup);

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", addUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);
export default router;
