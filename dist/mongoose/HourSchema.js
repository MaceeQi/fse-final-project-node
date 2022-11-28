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
 * @file Implements mongoose schema for hours
 */
const mongoose_1 = __importStar(require("mongoose"));
/**
 * @typedef {Hour} Hour Represents a restaurant open hour object interface
 * @property {string} weekday Restaurant cuisine type
 * @property {string} hour Restaurant open hours
 * @property {Restaurant} restaurant Restaurant
 */
const HourSchema = new mongoose_1.default.Schema({
    weekday: { type: String, required: true },
    hour: { type: String, required: true },
    restaurant: { type: mongoose_1.Schema.Types.ObjectId, ref: "RestaurantModel" },
}, { collection: "hours" });
exports.default = HourSchema;
//# sourceMappingURL=HourSchema.js.map