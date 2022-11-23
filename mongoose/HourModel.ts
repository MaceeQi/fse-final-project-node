/**
 * @file Implements mongoose model to CRUD
 * documents in the hours collection
 */
import mongoose from "mongoose";
import HourSchema from "./HourSchema";

const HourModel = mongoose.model("HourModel", HourSchema);
export default HourModel;