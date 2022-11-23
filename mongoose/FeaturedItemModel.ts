/**
 * @file Implements mongoose model to CRUD
 * documents in the featured-items collection
 */
import mongoose from "mongoose";
import FeaturedItemSchema from "./FeaturedItemSchema";

const FeaturedItemModel = mongoose.model("FeaturedItemModel", FeaturedItemSchema);
export default FeaturedItemModel;