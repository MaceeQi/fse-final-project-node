"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../mongoose/UserModel"));
/**
 * @class UserDao Implements Data Access Object managing data storage
 * of Users
 * @property {UserDao} userDao Private single instance of UserDao
 */
class UserDao {
    constructor() {
        /**
         * Uses UserModel to retrieve all user documents from users collection
         * @returns Promise To be notified when the users are retrieved from
         * database
         */
        this.findAllUsers = () => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.find().exec(); });
        /**
         * Uses UserModel to retrieve single user document from users collection
         * @param {string} uid User's primary key
         * @returns Promise To be notified when user is retrieved from the database
         */
        this.findUserById = (uid) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.findById(uid); });
        /**
         * Inserts user instance into the database
         * @param {User} user Instance to be inserted into the database
         * @returns Promise To be notified when user is inserted into the database
         */
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.create(user); });
        /**
         * Removes user from the database
         * @param {string} uid Primary key of user to be removed
         * @returns Promise To be notified when user is removed from the database
         */
        this.deleteUser = (uid) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.deleteOne({ _id: uid }); });
        /**
         * Updates user with new values in database
         * @param {string} uid Primary key of user to be modified
         * @param {any} user User object containing properties and their new values
         * @returns Promise To be notified when user is updated in the database
         */
        this.updateUser = (uid, user) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.updateOne({ _id: uid }, { $set: user }); });
        /**
         * Removes all users from the database
         * @returns Promise To be notified when all users are removed from the database
         */
        this.deleteAllUsers = () => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.deleteMany({}); });
        /**
         * Removes user from the database
         * @param {string} username Username of user to be removed
         * @returns Promise To be notified when user is removed from the database
         */
        this.deleteUsersByUsername = (username) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.deleteMany({ username }); });
        /**
         * Uses UserModel to retrieve user documents from users collection of given type
         * @param {string} type Type of user
         * @returns Promise To be notified when users are retrieved from the database
         */
        this.findUsersByType = (type) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.find({ type }); });
        /**
         * Uses UserModel to retrieve user documents from users collection that are
         * associated with the given restaurant
         * @param {string} rid Primary key of the restaurant
         * @returns Promise To be notified when users are retrieved from the database
         */
        this.findUsersByRestaurant = (rid) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.find({ business: rid }); });
        /**
         * Removes users from the database that are associated with the given restaurant
         * @param {string} rid Primary key of the restaurant
         * @returns Promise To be notified when users are removed from the database
         */
        this.deleteUsersByRestaurant = (rid) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.deleteMany({ business: rid }); });
        /**
         * Uses UserModel to retrieve a user documentation from users collection by
         * its username
         * @returns Promise To be notified when the user is retrieved from
         * database
         */
        this.findUserByUsername = (username) => __awaiter(this, void 0, void 0, function* () { return UserModel_1.default.findOne({ username }); });
    }
}
exports.default = UserDao;
UserDao.userDao = null;
/**
 * Creates singleton DAO instance
 * @returns UserDao
 */
UserDao.getInstance = () => {
    if (UserDao.userDao === null) {
        UserDao.userDao = new UserDao();
    }
    return UserDao.userDao;
};
//# sourceMappingURL=UserDao.js.map