import mongoose from "mongoose";

export interface IFoodItem {
  name: string; // Name of the food item
  price: number; // Price of the food item
  amount: number; // Amount (in kg or pieces)
  category?: string; // Optional category of the food item
  description?: string; // Optional description of the food item
  createdAt?: Date; // Date the food item was created
  updatedAt?: Date; // Date the food item was last updated
}

export interface FoodItemDocument extends IFoodItem, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
