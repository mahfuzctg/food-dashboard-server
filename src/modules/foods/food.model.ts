import mongoose, { Document, Schema } from "mongoose";
import { IFoodItem } from "./food.interface";

// FoodItemDocument will include all the properties from IFoodItem
// and also the Mongoose Document properties (like _id, createdAt, updatedAt)
export interface FoodItemDocument extends IFoodItem, Document {
  // No need to define createdAt and updatedAt explicitly here as they're handled by timestamps
}

// Define the schema for FoodItem
const FoodItemSchema: Schema<FoodItemDocument> = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false },
    amount: { type: Number, required: true },
    category: { type: String, required: false },
    description: { type: String, required: false },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Export the FoodItem model
export const FoodItem = mongoose.model<FoodItemDocument>(
  "FoodItem",
  FoodItemSchema
);
