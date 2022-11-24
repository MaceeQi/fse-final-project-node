/**
 * @file Declares User data type
 */
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import UserType from "./UserType";
import mongoose from "mongoose";
import Restaurant from "./Restaurant";

/**
 * @interface
 * @typedef User Represents a user
 * @property {string} username Username of the user's account
 * @property {string} password Password for the user's account
 * @property {string} firstName User's first name
 * @property {string} lastName User's last name
 * @property {string} email User's email address
 * @property {UserType} type Type of user (average, critic, business)
 * @property {Restaurant} business Business associated with user if type of user is Business
 * @property {string} profilePhoto User's profile photo
 * @property {string} headerImage Header image in user's profile
 * @property {MaritalStatus} maritalStatus User's marital status (single, married, widowed)
 * @property {string} biography User's biography
 * @property {Date} dateOfBirth User's date of birth
 * @property {Date} joined Date user created an account
 * @property {Location} location User's location
 */
export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    email: string,
    type: UserType,
    business?: Restaurant,
    profilePhoto?: string,
    headerImage?: string,
    maritalStatus?: MaritalStatus,
    biography?: string,
    dateOfBirth?: Date,
    joined?: Date,
    location?: Location,
};