/**
 * @file Declares Review data type
 */
import Tuit from "./Tuit";
import Restaurant from "./Restaurant";
import User from "./User";

/**
 * @typedef Review Represents a review
 * @property {Tuit} review Review that was given
 * @property {Restaurant} restaurant Restaurant that the review is for
 */
export default interface Review {
    review: Tuit,
    restaurant: Restaurant,
    // critic: User
}