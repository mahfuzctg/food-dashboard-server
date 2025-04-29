import express from "express";
import * as FoodController from "./food.controller";

const router = express.Router();

// Routes for food items
router.post("/", FoodController.createFoodItem); // Create food item
router.get("/", FoodController.getFoodItems); // Get all food items
router.get("/:id", FoodController.getFoodItem); // Get single food item by ID
router.put("/:id", FoodController.updateFoodItem); // Update food item
router.delete("/:id", FoodController.deleteFoodItem); // Delete food item

export const FoodsRoutes = router;
