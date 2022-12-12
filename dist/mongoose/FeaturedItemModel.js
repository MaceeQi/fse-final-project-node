"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose model to CRUD
 * documents in the featured-items collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
const FeaturedItemSchema_1 = __importDefault(require("./FeaturedItemSchema"));
const FeaturedItemModel = mongoose_1.default.model("FeaturedItemModel", FeaturedItemSchema_1.default);
exports.default = FeaturedItemModel;
//# sourceMappingURL=FeaturedItemModel.js.map