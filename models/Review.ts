/**
 * @file Declares Review data type
 */
import Restaurant from "./Restaurant";
import User from "./User";
import mongoose from "mongoose";

/**
 * @typedef Review Represents a review
 * @property {string} review Review that was given
 * @property {User} critic User posting the review
 * @property {Restaurant} restaurant Restaurant that the review is for
 */
export default interface Review {
    _id?: mongoose.Schema.Types.ObjectId,
    review: string,
    critic: User,
    restaurant: Restaurant,
    time?: Date
}