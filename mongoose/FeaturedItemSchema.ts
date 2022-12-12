/**
 * @file Implements mongoose schema for featured-items
 */
import mongoose, {Schema} from "mongoose";
import FeaturedItem from "../models/FeaturedItem";

/**
 * @typedef {FeaturedItem} FeatureItem Represents a restaurant open hour object interface
 * @property {string} food Restaurant featured food items
 * @property {string} price Price
 * @property {string} photo Food photo
 * @property {boolean} popular Food's popularity
 * @property {Restaurant} restaurant Restaurant
 */
const FeaturedItemSchema = new mongoose.Schema<FeaturedItem>({
    food: {type: String, required: true},
    price: {type: String, required: true},
    photo: {type: String, default: "emptyFood.jpeg"},
    popular: {type: Boolean, required: true},
    restaurant: {type: Schema.Types.ObjectId, ref: "RestaurantModel"},
}, {collection: "featured-items"});
export default FeaturedItemSchema;