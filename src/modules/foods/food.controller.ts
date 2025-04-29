/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import mongoose from "mongoose";
import * as FoodService from "./food.service";

// Extend the Express Request interface to include `user`
interface AuthenticatedRequest extends Request {
  user: { id: string }; // Define the user object with an ID property
}

// Create Food Item
export const createFoodItem = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { name, price, amount, category } = req.body;
  const owner = new mongoose.Types.ObjectId(req.user.id);

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
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const owner = req.user.id;
  const data = req.body;

  try {
    const updatedFoodItem = await FoodService.updateFoodItem(id, owner, data);
    if (!updatedFoodItem) {
      res.status(404).json({
        success: false,
        message: "Food item not found or unauthorized",
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
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const owner = req.user.id;

  try {
    const deletedFoodItem = await FoodService.deleteFoodItem(id, owner);
    if (!deletedFoodItem) {
      res.status(404).json({
        success: false,
        message: "Food item not found or unauthorized",
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
