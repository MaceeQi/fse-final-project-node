"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose model to CRUD
 * documents in the hours collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
const HourSchema_1 = __importDefault(require("./HourSchema"));
const HourModel = mongoose_1.default.model("HourModel", HourSchema_1.default);
exports.default = HourModel;
//# sourceMappingURL=HourModel.js.map