"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema for featured-items
 */
const mongoose_1 = __importStar(require("mongoose"));
/**
 * @typedef {FeaturedItem} FeatureItem Represents a restaurant open hour object interface
 * @property {string} food Restaurant featured food items
 * @property {string} price Price
 * @property {string} photo Food photo
 * @property {boolean} popular Food's popularity
 * @property {Restaurant} restaurant Restaurant
 */
const FeaturedItemSchema = new mongoose_1.default.Schema({
    food: { type: String, required: true },
    price: { type: String, required: true },
    photo: { type: String, default: "emptyFood.jpeg" },
    popular: { type: Boolean, required: true },
    restaurant: { type: mongoose_1.Schema.Types.ObjectId, ref: "RestaurantModel" },
}, { collection: "featured-items" });
exports.default = FeaturedItemSchema;
//# sourceMappingURL=FeaturedItemSchema.js.map