/**
 * @file Implements DAO managing data storage of restaurants. Uses mongoose
 * RestaurantModel to integrate with MongoDB
 */
import Restaurant from "../models/Restaurant";
import RestaurantModel from "../mongoose/RestaurantModel";
import RestaurantDaoI from "../interfaces/RestaurantDaoI";


/**
 * @class RestaurantDao Implements Data Access Object managing data storage
 * of Restaurants
 * @property {RestaurantDao} restaurantDao Private single instance of RestaurantDao
 */
export default class RestaurantDao implements RestaurantDaoI {
    private static restaurantDao: RestaurantDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns RestaurantDao
     */
    public static getInstance = (): RestaurantDao => {
        if(RestaurantDao.restaurantDao === null) {
            RestaurantDao.restaurantDao = new RestaurantDao();
        }
        return RestaurantDao.restaurantDao;
    }
    private constructor() {}

    /**
     * Uses RestaurantModel to retrieve all restaurant documents from restaurants
     * collection
     * @returns Promise To be notified when the restaurants are retrieved from
     * database
     */
    public async findAllRestaurants(): Promise<Restaurant[]> {
        return await RestaurantModel.find().populate("name").exec();

    }

    /**
     * Uses RestaurantModel to retrieve single restaurant document by ID from
     * restaurants collection
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when restaurant is retrieved from the database
     */
    public async findRestaurantById(rid: string): Promise<Restaurant> {
        return await RestaurantModel.findById(rid).populate("name").exec();
    }

    /**
     * Inserts restaurant instance into the database
     * @param {string} uid Restaurant owner's primary key
     * @param {Restaurant} restaurant Instance to be inserted into the database
     * @returns Promise To be notified when restaurant is inserted into the database
     */
    public async createRestaurant(uid: string, restaurant: Restaurant): Promise<Restaurant> {
        return await RestaurantModel.create({...restaurant, ownedBy: uid})
    }

    /**
     * Updates restaurant with new values in database
     * @param {string} rid Primary key of restaurant to be modified
     * @param {any} restaurant Restaurant object containing properties and
     * their new values
     * @returns Promise To be notified when restaurant is updated in the database
     */
    public async updateRestaurant(rid: string, restaurant: Restaurant): Promise<any> {
        return RestaurantModel.updateOne(
            {_id: rid}, {$set: restaurant});
    }

    /**
     * Removes restaurant from the database
     * @param {string} rid Primary key of restaurant to be removed
     * @returns Promise To be notified when restaurant is removed from the database
     */
    public async deleteRestaurant(rid: string): Promise<any> {
        return RestaurantModel.deleteOne({_id: rid});
    }

    /**
     * Removes multiple restaurants from the database by the username.
     * Useful for testing
     * @param {string} restaurantName Usernames of restaurants to be deleted
     * @returns Promise To be notified when restaurants are removed from the
     * database
     */
    public async deleteRestaurantsByRestaurantName(restaurantName: string): Promise<any> {
        return RestaurantModel.deleteMany({name: restaurantName});
    }

    /**
     * Uses RestaurantModel to retrieve restaurant documents from
     * restaurants collection that matches given restaurant name
     * @param {string} restaurant Name of the restaurant
     * @returns Promise To be notified when restaurants are retrieved from the database
     */
    public async findRestaurantsByName (restaurant: string): Promise<Restaurant[]> {
        return RestaurantModel.find({name: restaurant});
    }

}