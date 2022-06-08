import { Router } from "express";
import { signin, signup } from "../controllers/auth";
const router = Router();

router.post("/login", signin);

router.post("/signup", signup);
export default router;
