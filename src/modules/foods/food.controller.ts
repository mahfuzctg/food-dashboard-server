/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import * as FoodService from "./food.service";

// Create Food Item
export const createFoodItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, price, amount, category } = req.body;

  try {
    const newFoodItem = await FoodService.createFoodItem({
      name,
      price,
      amount,
      category,
    });

    res.status(201).json({
      success: true,
      data: newFoodItem,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create food item" });
  }
};

// Get All Food Items
export const getFoodItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const foodItems = await FoodService.getAllFoodItems();
    res.status(200).json({ success: true, data: foodItems });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch food items" });
  }
};

// Get Single Food Item
export const getFoodItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const foodItem = await FoodService.getFoodItemById(id);
    if (!foodItem) {
      res.status(404).json({ success: false, message: "Food item not found" });
      return;
    }
    res.status(200).json({ success: true, data: foodItem });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch food item" });
  }
};

// Update Food Item
export const updateFoodItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedFoodItem = await FoodService.updateFoodItem(id, data);
    if (!updatedFoodItem) {
      res.status(404).json({
        success: false,
        message: "Food item not found",
      });
      return;
    }
    res.status(200).json({ success: true, data: updatedFoodItem });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update food item" });
  }
};

// Delete Food Item
export const deleteFoodItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedFoodItem = await FoodService.deleteFoodItem(id);
    if (!deletedFoodItem) {
      res.status(404).json({
        success: false,
        message: "Food item not found",
      });
      return;
    }
    res
      .status(200)
      .json({ success: true, message: "Food item deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete food item" });
  }
};
