import { Router } from "express";
import {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
  getBookWithLimit,
} from "../controllers/books";
const router = Router();

// router.get("/books", getBooks);

router.get("/books/:id", getBook);

router.post("/books", addBook);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

router.get("/books", getBookWithLimit);

export default router;
