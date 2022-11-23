/**
 * @file Implements mongoose schema for hours
 */
import mongoose, {Schema} from "mongoose";
import Hour from "../models/Hour";

/**
 * @typedef {Hour} Hour Represents a restaurant open hour object interface
 * @property {string} weekday Restaurant cuisine type
 * @property {string} hour Restaurant open hours
 * @property {Restaurant} restaurant Restaurant
 */
const HourSchema = new mongoose.Schema<Hour>({
    weekday: {type: String, required: true},
    hour: {type: String, required: true},
    restaurant: {type: Schema.Types.ObjectId, ref: "RestaurantModel"},
}, {collection: "hours"});
export default HourSchema;