/**
 * @file Implements mongoose schema for tuits
 */
import mongoose from "mongoose";
import Post from "../models/Post";

/**
 * @typedef {Post} Post Represents a restaurant posted announcements interface
 * @property {string} post Restaurant post text
 * @property {Restaurant} postedBy Restaurant
 */
const PostSchema = new mongoose.Schema<Post>({
    post: {type: String, required: true},
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "RestaurantModel"}
}, {collection: 'posts'});
export default PostSchema;