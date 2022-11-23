/**
 * @file Implements mongoose model to CRUD
 * documents in the restaurants collection
 */
import mongoose from "mongoose";
import RestaurantSchema from "./RestaurantSchema";
const RestaurantModel = mongoose.model('RestaurantModel', RestaurantSchema);
export default RestaurantModel;