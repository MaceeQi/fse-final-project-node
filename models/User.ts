/**
 * @file Declares User data type
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import UserType from "./UserType";
import mongoose from "mongoose";

/**
 * @typedef User Represents a user
 * @property {string} _id Unique ID of the user
 * @property {string} username Username of the user's account
 * @property {string} password Password for the user's account
 * @property {string} firstName User's first name
 * @property {string} lastName User's last name
 * @property {string} email User's email address
 * @property {UserType} type Type of user
 * @property {string} businessId ID of business if type of user is Business
 * @property {string} profilePhoto User's profile photo
 * @property {string} headerImage Header image in user's profile
 * @property {AccountType} accountType User's type of account
 * @property {MaritalStatus} maritalStatus User's marital status
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
    businessId?: string,
    profilePhoto?: string,
    headerImage?: string,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    biography?: string,
    dateOfBirth?: Date,
    joined?: Date,
    location?: Location,
};