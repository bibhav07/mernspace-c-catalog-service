import express from "express";
import { CategoryController } from "./category-controller";
import categoryValidator from "./category-validator";
import { CategoryService } from "./category-service";
import logger from "../config/logger";
import { asyncWrapper } from "../common/utils/wrapper";
import authenticate from "../common/middlewares/authenticate";
const router = express.Router();

const categoryService = new CategoryService();
const categorycontroller = new CategoryController(categoryService, logger);

router.post(
    "/",
    authenticate,
    categoryValidator,
    asyncWrapper(categorycontroller.create),
);

export default router;
