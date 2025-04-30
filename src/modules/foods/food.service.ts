import { IFoodItem } from "./food.interface";
import { FoodItem } from "./food.model";

// Create a new food item
export const createFoodItem = async (data: IFoodItem) => {
  try {
    const foodItem = await FoodItem.create(data);
    return foodItem;
  } catch (err) {
    console.error("Error creating food item:", err);
    throw new Error("Failed to create food item");
  }
};

// Fetch all food items (open to everyone)
export const getAllFoodItems = async () => {
  try {
    const foodItems = await FoodItem.find();
    return foodItems;
  } catch (err) {
    console.error("Error fetching food items:", err);
    throw new Error("Failed to fetch food items");
  }
};

// Fetch a single food item by ID (open to everyone)
export const getFoodItemById = async (id: string) => {
  try {
    const foodItem = await FoodItem.findById(id);
    if (!foodItem) {
      throw new Error("Food item not found");
    }
    return foodItem;
  } catch (err) {
    console.error(`Error fetching food item with ID ${id}:`, err);
    throw new Error(`Failed to fetch food item with ID ${id}`);
  }
};

// Update a food item (open access)
export const updateFoodItem = async (id: string, data: Partial<IFoodItem>) => {
  try {
    const updatedFoodItem = await FoodItem.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedFoodItem) {
      throw new Error("Food item not found");
    }
    return updatedFoodItem;
  } catch (err) {
    console.error(`Error updating food item with ID ${id}:`, err);
    throw new Error(`Failed to update food item with ID ${id}`);
  }
};

// Delete a food item (open access)
export const deleteFoodItem = async (id: string) => {
  try {
    const deletedFoodItem = await FoodItem.findByIdAndDelete(id);
    if (!deletedFoodItem) {
      throw new Error("Food item not found");
    }
    return deletedFoodItem;
  } catch (err) {
    console.error(`Error deleting food item with ID ${id}:`, err);
    throw new Error(`Failed to delete food item with ID ${id}`);
  }
};
