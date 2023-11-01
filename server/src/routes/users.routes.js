import { Router } from "express";

import {
  addNewBook,
  getAllBooks,
  getBook,
  editBook,
  deleteBook
} from "../controllers/users.controller.js";

import { userSchema } from '../schemas/users.schema.js'
import { validateSchema } from '../middlewares/schemaValidator.middleware.js'

const router = Router();

router.get("/crud", getAllBooks);
router.post("/crud", validateSchema(userSchema), addNewBook);
router.get("/crud/:id", getBook);
router.put("/crud/:id",validateSchema(userSchema), editBook);
router.delete("/crud/:id", deleteBook);

export default router;
