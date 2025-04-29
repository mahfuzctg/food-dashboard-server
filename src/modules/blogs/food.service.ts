import { FoodItem } from "./blog.model";
import { IFoodItem } from "./food.interface";

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

// Update a food item (only by the owner)
export const updateFoodItem = async (
  id: string,
  ownerId: string,
  data: Partial<IFoodItem>
) => {
  const updatedFoodItem = await FoodItem.findOneAndUpdate(
    { _id: id, owner: ownerId }, // Ensure the owner is authorized to update
    data,
    {
      new: true, // Return the updated food item
    }
  );
  return updatedFoodItem;
};

// Delete a food item (only by the owner)
export const deleteFoodItem = async (id: string, ownerId: string) => {
  const deletedFoodItem = await FoodItem.findOneAndDelete({
    _id: id,
    owner: ownerId, // Ensure only the owner can delete their food item
  });
  return deletedFoodItem;
};
