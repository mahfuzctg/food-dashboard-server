import express from "express";
import multer from "multer";
import * as FoodController from "./food.controller";

const router = express.Router();

// Multer config: store files in "uploads/" folder
const upload = multer({ dest: "uploads/" });

// Routes for food items
router.post("/", upload.single("image"), FoodController.createFoodItem);
router.get("/", FoodController.getFoodItems);
router.get("/:id", FoodController.getFoodItem);

router.put("/:id", upload.single("image"), FoodController.updateFoodItem);

router.delete("/:id", FoodController.deleteFoodItem);

export const FoodsRoutes = router;
