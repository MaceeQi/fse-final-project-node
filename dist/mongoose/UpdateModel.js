"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose model to CRUD
 * documents in the posts collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
const UpdateSchema_1 = __importDefault(require("./UpdateSchema"));
const UpdateModel = mongoose_1.default.model("UpdateModel", UpdateSchema_1.default);
exports.default = UpdateModel;
//# sourceMappingURL=UpdateModel.js.map