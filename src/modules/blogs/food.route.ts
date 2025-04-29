import express from "express";
import * as FoodController from "./food.controller";

const router = express.Router();

// Route to create a new food item
router.post("/create", FoodController.createFoodItem);

// Route to get all food items
router.get("/", FoodController.getFoodItems);

// Route to get a single food item by ID
router.get("/:id", FoodController.getFoodItem);

// Route to update a food item by ID
router.put("/:id", FoodController.updateFoodItem);

// Route to delete a food item by ID
router.delete("/:id", FoodController.deleteFoodItem);

export const FoodRoutes = router;
