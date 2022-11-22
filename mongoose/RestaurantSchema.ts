/**
 * @file Implements mongoose schema for restaurants
 */
import mongoose from "mongoose";
import Hour from "../models/Hour";
import Post from "../models/Post";
import FeaturedItem from "../models/FeaturedItem";

const RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    bannerPicture: String,
    profilePicture: String,
    handle: {type: String, required: true},
    bio: String,
    cuisine: {type: String, required: true},
    price: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    website: String,
}, {collection: 'restaurants'});
export default RestaurantSchema;