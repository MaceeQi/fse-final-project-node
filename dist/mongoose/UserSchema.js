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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema for users
 */
const mongoose_1 = __importStar(require("mongoose"));
const MaritalStatus_1 = __importDefault(require("../models/MaritalStatus"));
/**
 * @typedef User Represents a user
 * @property {string} username Username of the user's account
 * @property {string} password Password for the user's account
 * @property {string} firstName User's first name
 * @property {string} lastName User's last name
 * @property {string} email User's email address
 * @property {string} type Type of user
 * @property {Restaurant} business Reference to business if user type is business
 * @property {string} profilePhoto User's profile photo
 * @property {string} headerImage Header image in user's profile
 * @property {string} accountType User's type of account
 * @property {string} maritalStatus User's marital status
 * @property {string} biography User's biography
 * @property {Date} dateOfBirth User's date of birth
 * @property {Date} joined Date user created an account
 * @property {number} location User's location
*/
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    type: { type: String, enum: ['AVERAGE', 'CRITIC', 'BUSINESS'], required: true },
    business: { type: mongoose_1.Schema.Types.ObjectId, ref: "RestaurantModel" },
    profilePhoto: String,
    headerImage: String,
    maritalStatus: { type: String, default: MaritalStatus_1.default.Single, enum: ['MARRIED', 'SINGLE', 'WIDOWED'] },
    biography: String,
    dateOfBirth: Date,
    joined: { type: Date, default: Date.now },
    location: {
        latitude: { type: Number, default: 0.0 },
        longitude: { type: Number, default: 0.0 },
    }
}, { collection: 'users' });
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map