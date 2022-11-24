/**
 * @file Implements mongoose schema for reviews
 */
import mongoose from "mongoose";
import Review from "../models/Review";

/**
 * @typedef Review Represents a review
 * @property {ObjectId[]} review Tuit being assigned as a review
 * @property {ObjectId[]} restaurant Restaurant being reviewed
 */
const ReviewSchema = new mongoose.Schema<Review>({
    review: {type: mongoose.Schema.Types.ObjectId, ref: "TuitModel", required: true},
    restaurant: {type: mongoose.Schema.Types.ObjectId, ref: "RestaurantModel", required: true}
}, {collection: "reviews"});

export default ReviewSchema;