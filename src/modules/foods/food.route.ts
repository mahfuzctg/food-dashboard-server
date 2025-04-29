import express from "express";

import * as FoodController from "./food.controller";
const router = express.Router();

// Only require authentication for create, update, and delete routes
router.post("/create");
router.get("/", FoodController.getFoodItems);
router.get("/:id", FoodController.getFoodItems);
router.put("/:id");
router.delete("/:id");

export const FoodsRoutes = router;
