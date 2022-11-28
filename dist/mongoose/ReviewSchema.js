"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema for reviews
 */
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * @typedef Review Represents a review
 * @property {string} review Text review
 * @property {ObjectId[]} critic User creating the review
 * @property {ObjectId[]} restaurant Restaurant being reviewed
 */
const ReviewSchema = new mongoose_1.default.Schema({
    review: { type: String, required: true },
    critic: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "UserModel", required: true },
    restaurant: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "RestaurantModel", required: true }
}, { collection: "reviews" });
exports.default = ReviewSchema;
//# sourceMappingURL=ReviewSchema.js.map