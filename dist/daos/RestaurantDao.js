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
const RestaurantModel_1 = __importDefault(require("../mongoose/RestaurantModel"));
/**
 * @class RestaurantDao Implements Data Access Object managing data storage
 * of Restaurants
 * @property {RestaurantDao} restaurantDao Private single instance of RestaurantDao
 */
class RestaurantDao {
    constructor() { }
    /**
     * Uses RestaurantModel to retrieve all restaurant documents from restaurants
     * collection
     * @returns Promise To be notified when the restaurants are retrieved from
     * database
     */
    findAllRestaurants() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield RestaurantModel_1.default.find().populate("name").exec();
        });
    }
    /**
     * Uses RestaurantModel to retrieve single restaurant document by ID from
     * restaurants collection
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when restaurant is retrieved from the database
     */
    findRestaurantById(rid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield RestaurantModel_1.default.findById(rid).populate("name").exec();
        });
    }
    /**
     * Inserts restaurant instance into the database
     * @param {string} uid Restaurant owner's primary key
     * @param {Restaurant} restaurant Instance to be inserted into the database
     * @returns Promise To be notified when restaurant is inserted into the database
     */
    createRestaurant(restaurant) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield RestaurantModel_1.default.create(Object.assign({}, restaurant));
        });
    }
    /**
     * Updates restaurant with new values in database
     * @param {string} rid Primary key of restaurant to be modified
     * @param {any} restaurant Restaurant object containing properties and
     * their new values
     * @returns Promise To be notified when restaurant is updated in the database
     */
    updateRestaurant(rid, restaurant) {
        return __awaiter(this, void 0, void 0, function* () {
            return RestaurantModel_1.default.updateOne({ _id: rid }, { $set: restaurant });
        });
    }
    /**
     * Removes restaurant from the database
     * @param {string} rid Primary key of restaurant to be removed
     * @returns Promise To be notified when restaurant is removed from the database
     */
    deleteRestaurant(rid) {
        return __awaiter(this, void 0, void 0, function* () {
            return RestaurantModel_1.default.deleteOne({ _id: rid });
        });
    }
    /**
     * Removes multiple restaurants from the database by the username.
     * Useful for testing
     * @param {string} restaurantName Usernames of restaurants to be deleted
     * @returns Promise To be notified when restaurants are removed from the
     * database
     */
    deleteRestaurantsByRestaurantName(restaurantName) {
        return __awaiter(this, void 0, void 0, function* () {
            return RestaurantModel_1.default.deleteMany({ name: restaurantName });
        });
    }
    /**
     * Uses RestaurantModel to retrieve restaurant documents from
     * restaurants collection that matches given restaurant name
     * @param {string} restaurant Name of the restaurant
     * @returns Promise To be notified when restaurants are retrieved from the database
     */
    findRestaurantsByName(restaurant) {
        return __awaiter(this, void 0, void 0, function* () {
            return RestaurantModel_1.default.find({ name: restaurant });
        });
    }
    /**
     * Uses RestaurantModel to delete restaurant documents from
     * restaurants collection that matches given owner id
     * @param {string} owner id of the restaurant owner
     * @returns Promise To be notified when restaurants are deleted from the database
     */
    deleteRestaurantByOwner(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            return RestaurantModel_1.default.deleteMany({ ownedBy: owner });
        });
    }
}
exports.default = RestaurantDao;
RestaurantDao.restaurantDao = null;
/**
 * Creates singleton DAO instance
 * @returns RestaurantDao
 */
RestaurantDao.getInstance = () => {
    if (RestaurantDao.restaurantDao === null) {
        RestaurantDao.restaurantDao = new RestaurantDao();
    }
    return RestaurantDao.restaurantDao;
};
//# sourceMappingURL=RestaurantDao.js.map