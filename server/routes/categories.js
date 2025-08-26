import { Router } from "express";
import addCategory from "../controllers/categories.js";
const router = Router();

router.post("/add-category",addCategory)

export default router