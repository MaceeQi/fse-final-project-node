/**
 * @file Implements mongoose schema for users
 */
import mongoose, {Schema} from "mongoose";
import User from "../models/User";
import MaritalStatus from "../models/MaritalStatus";

/**
 * @typedef User Represents a user
 * @property {string} username Username of the user's account
 * @property {string} password Password for the user's account
 * @property {string} firstName User's first name
 * @property {string} lastName User's last name
 * @property {string} email User's email address
 * @property {string} type Type of user
 * @property {Restaurant} business Reference to business if user type is business
 * @property {string} profilePhoto User's profile photo
 * @property {string} headerImage Header image in user's profile
 * @property {string} accountType User's type of account
 * @property {string} maritalStatus User's marital status
 * @property {string} biography User's biography
 * @property {Date} dateOfBirth User's date of birth
 * @property {Date} joined Date user created an account
 * @property {number} location User's location
*/
const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: {type: String, required: true},
    type: {type: String, enum: ['AVERAGE', 'CRITIC', 'BUSINESS'], required: true},
    business: {type: Schema.Types.ObjectId, ref: "RestaurantModel"},
    profilePhoto: {type: String, default: "charlie.jpg"},
    headerImage: String,
    maritalStatus: {type: String, default: MaritalStatus.Single, enum: ['MARRIED', 'SINGLE', 'WIDOWED']},
    biography: String,
    dateOfBirth: Date,
    joined: {type: Date, default: Date.now},
    location: {
        latitude: {type: Number, default: 0.0},
        longitude: {type: Number, default: 0.0},
    }
}, {collection: 'users'});
export default UserSchema;