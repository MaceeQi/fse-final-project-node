import mongoose from "mongoose";
import Review from "../models/Review";

const ReviewSchema = new mongoose.Schema<Review>({
    review: {type: mongoose.Schema.Types.ObjectId, ref: "TuitModel", required: true},
    restaurant: {type: mongoose.Schema.Types.ObjectId, ref: "RestaurantModel", required: true}
}, {collection: "reviews"});

export default ReviewSchema;