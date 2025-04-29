import { IFoodItem } from "./food.interface";
import { FoodItem } from "./food.model";

// Create a new food item
export const createFoodItem = async (data: IFoodItem) => {
  const foodItem = await FoodItem.create(data);
  return foodItem;
};

// Fetch all food items (open to everyone)
export const getAllFoodItems = async () => {
  const foodItems = await FoodItem.find(); // Fetch all food items
  return foodItems;
};

// Fetch a single food item by ID (open to everyone)
export const getFoodItemById = async (id: string) => {
  const foodItem = await FoodItem.findById(id); // Fetch food item by ID
  return foodItem;
};

// Update a food item (open access)
export const updateFoodItem = async (id: string, data: Partial<IFoodItem>) => {
  const updatedFoodItem = await FoodItem.findByIdAndUpdate(id, data, {
    new: true, // Return the updated food item
  });
  return updatedFoodItem;
};

// Delete a food item (open access)
export const deleteFoodItem = async (id: string) => {
  const deletedFoodItem = await FoodItem.findByIdAndDelete(id);
  return deletedFoodItem;
};
