"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose model to CRUD documents in the reviews collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
const ReviewSchema_1 = __importDefault(require("./ReviewSchema"));
const ReviewModel = mongoose_1.default.model("ReviewModel", ReviewSchema_1.default);
exports.default = ReviewModel;
//# sourceMappingURL=ReviewModel.js.map