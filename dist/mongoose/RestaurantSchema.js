"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema for restaurants
 */
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * @typedef {Restaurant} Restaurant Represents a restaurant object
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
const RestaurantSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    ownedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "UserModel", required: true },
    bannerPicture: { type: String, default: "emptyBanner.jpeg" },
    profilePicture: { type: String, default: "emptyAvatar.png" },
    handle: { type: String, required: true },
    bio: String,
    cuisine: { type: String, required: true },
    price: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    website: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
}, { collection: 'restaurants' });
exports.default = RestaurantSchema;
//# sourceMappingURL=RestaurantSchema.js.map