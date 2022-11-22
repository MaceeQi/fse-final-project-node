import mongoose from "mongoose";
import Review from "../models/Review";
// import Restaurant from "../models/Restaurant";

const ReviewSchema = new mongoose.Schema<Review>({
    review: {type: String, required: true},
    critic: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}
    // restaurant: {type: Restaurant, required: true}
}, {collection: "reviews"});

export default ReviewSchema;