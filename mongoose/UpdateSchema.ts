/**
 * @file Implements mongoose schema for tuits
 */
import mongoose from "mongoose";
import Update from "../models/Update";

/**
 * @typedef {Update} Update Represents a restaurant posted announcements interface
 * @property {string} Update Restaurant update text
 * @property {Restaurant} updatedBy Restaurant
 */
const UpdateSchema = new mongoose.Schema<Update>({
    update: {type: String, required: true},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: "RestaurantModel"}
}, {collection: 'updates'});
export default UpdateSchema;