"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema for tuits
 */
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * @typedef {Update} Update Represents a restaurant posted announcements interface
 * @property {string} Update Restaurant update text
 * @property {Restaurant} updatedBy Restaurant
 */
const UpdateSchema = new mongoose_1.default.Schema({
    update: { type: String, required: true },
    updatedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "RestaurantModel" }
}, { collection: 'updates' });
exports.default = UpdateSchema;
//# sourceMappingURL=UpdateSchema.js.map