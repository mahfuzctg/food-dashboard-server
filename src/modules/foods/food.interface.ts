import mongoose from "mongoose";

// Updated IFoodItem interface to reflect the changes in the amount field
export interface IFoodItem {
  name: string;
  price: number;
  amount: string;
  image?: string;
  category?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Extends Mongoose Document and includes all properties from IFoodItem
export interface FoodItemDocument extends IFoodItem, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
