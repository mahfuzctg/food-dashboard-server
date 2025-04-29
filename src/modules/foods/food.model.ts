import mongoose, { Document, Schema } from "mongoose";
import { IFoodItem } from "./food.interface";

export interface FoodItemDocument extends IFoodItem, Document {
  createdAt: Date;
  updatedAt: Date;
}

const FoodItemSchema: Schema = new Schema<FoodItemDocument>(
  {
    name: { type: String, required: true }, // Name of the food item (Required)
    price: { type: Number, required: true }, // Price of the food item (Required)
    image: { type: String, required: false },
    amount: { type: Number, required: true }, // Amount (in kg or pieces, Required)
    category: { type: String, required: false }, // Optional category for the food item
    description: { type: String, required: false }, // Optional description of the food item
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the model using the schema
export const FoodItem = mongoose.model<FoodItemDocument>(
  "FoodItem",
  FoodItemSchema
);
