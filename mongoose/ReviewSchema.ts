/**
 * @file Implements mongoose schema for reviews
 */
import mongoose from "mongoose";
import Review from "../models/Review";

/**
 * @typedef Review Represents a review
 * @property {string} review Text review
 * @property {ObjectId[]} critic User creating the review
 * @property {ObjectId[]} restaurant Restaurant being reviewed
 */
const ReviewSchema = new mongoose.Schema<Review>({
    review: {type: String, required: true},
    critic: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true},
    restaurant: {type: mongoose.Schema.Types.ObjectId, ref: "RestaurantModel", required: true}
}, {collection: "reviews"});

export default ReviewSchema;