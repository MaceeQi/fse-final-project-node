import mongoose from "mongoose";
import User from "./User";

/**
 * @interface
 * @typedef {Restaurant} Restaurant Represents a restaurant object interface
 * @property {string} name Restaurant name
 * @property {string} ownedBy Restaurant owner
 * @property {string} bannerPicture Banner picture
 * @property {string} profilePicture Avatar picture
 * @property {string} handle Restaurant account handle
 * @property {string} bio Restaurant bio
 * @property {string} cuisine Restaurant cuisine type
 * @property {string} price Restaurant price range
 * @property {string} address Restaurant address
 * @property {string} phone Restaurant phone number
 * @property {string} website Restaurant website
 */
export default interface Restaurant {
    _id?: mongoose.Schema.Types.ObjectId,
    name: string,
    ownedBy: User,
    bannerPicture?: string,
    profilePicture?: string,
    handle: string,
    bio?: string,
    cuisine: string,
    price: string,
    address: string,
    phone: string,
    website?: string,
}