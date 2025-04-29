import express from "express";

import { FoodsRoutes } from "../modules/foods/food.route";

const router = express.Router();

// Define all module routes
const moduleRoutes = [{ path: "/foods", route: FoodsRoutes }];

// Register each module's routes
moduleRoutes.forEach((module) => router.use(module.path, module.route));

export default router;
