import mongoose from "mongoose";

export interface IFoodItem {
  name: string; // Name of the food item
  price: number; // Price of the food item
  amount: number; // Amount (in kg or pieces)
  image: string; // URL or path to the food item image
  category?: string; // Optional category of the food item
  description?: string; // Optional description of the food item
  createdAt?: Date; // Date the food item was created
  updatedAt?: Date; // Date the food item was last updated
}

// Extends Mongoose Document and includes all properties from IFoodItem
export interface FoodItemDocument extends IFoodItem, mongoose.Document {
  createdAt: Date; // Ensuring these are set by Mongoose
  updatedAt: Date;
}
