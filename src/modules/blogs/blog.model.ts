// food.model.ts

import mongoose, { Schema } from "mongoose";
import { FoodItemDocument } from "./food.interface"; // Import FoodItemDocument

const FoodItemSchema: Schema = new Schema<FoodItemDocument>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: false },
    description: { type: String, required: false },
  },
  {
    timestamps: true, // Automatically handle createdAt and updatedAt fields
  }
);

export const FoodItem = mongoose.model<FoodItemDocument>(
  "FoodItem",
  FoodItemSchema
);
