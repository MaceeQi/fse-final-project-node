/**
 * @file Implements mongoose model to CRUD
 * documents in the posts collection
 */
import mongoose from "mongoose";
import UpdateSchema from "./UpdateSchema";

const UpdateModel = mongoose.model("UpdateModel", UpdateSchema);
export default UpdateModel;