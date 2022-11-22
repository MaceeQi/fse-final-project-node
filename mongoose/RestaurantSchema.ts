/**
 * @file Implements mongoose schema for restaurants
 */
import mongoose from "mongoose";

/**
 * @typedef {Restaurant} Restaurant Represents a restaurant object
 * @property {string} name Restaurant name
 * @property {string} bannerPicture Banner picture
 * @property {string} profilePicture Avatar picture
 * @property {string} handle Restaurant account handle
 * @property {string} bio Restaurant bio
 * @property {string} cuisine Restaurant cuisine type
 * @property {string} price Restaurant price range
 * @property {string} address Restaurant address
 * @property {string} hours Restaurant open hours
 * @property {string} phone Restaurant phone number
 * @property {string} website Restaurant website
 */
const RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    bannerPicture: String,
    profilePicture: String,
    handle: {type: String, required: true},
    bio: String,
    cuisine: {type: String, required: true},
    price: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    website: String,
}, {collection: 'restaurants'});
export default RestaurantSchema;