import express from "express";
import { CategoryController } from "./category-controller";
import categoryValidator from "./category-validator";
const router = express.Router();

const categorycontroller = new CategoryController();

router.post("/", categoryValidator, categorycontroller.create);

export default router;
