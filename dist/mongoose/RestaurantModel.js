"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose model to CRUD
 * documents in the restaurants collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
const RestaurantSchema_1 = __importDefault(require("./RestaurantSchema"));
const RestaurantModel = mongoose_1.default.model('RestaurantModel', RestaurantSchema_1.default);
exports.default = RestaurantModel;
//# sourceMappingURL=RestaurantModel.js.map