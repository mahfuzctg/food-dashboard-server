import mongoose, { Document, Schema } from "mongoose";
import { IFoodItem } from "./food.interface";

// FoodItemDocument will include all the properties from IFoodItem
// and also the Mongoose Document properties (like _id, createdAt, updatedAt)
export interface FoodItemDocument extends IFoodItem, Document {
  amount: string;
}

// Define the schema for FoodItem
const FoodItemSchema: Schema<FoodItemDocument> = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false },
    amount: {
      type: String,
      required: true,
      match: [/^\d+(\.\d+)?(kg|lbs|piece)?$/, "Invalid amount format"], // Allows values like '2kg', '5.5lbs'
    },
    category: { type: String, required: false },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

// Export the FoodItem model
export const FoodItem = mongoose.model<FoodItemDocument>(
  "FoodItem",
  FoodItemSchema
);
