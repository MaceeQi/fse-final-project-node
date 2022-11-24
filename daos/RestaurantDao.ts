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
     * @param {Restaurant} restaurant Instance to be inserted into the database
     * @returns Promise To be notified when restaurant is inserted into the database
     */
    public async createRestaurant(uid: string, restaurant: Restaurant): Promise<Restaurant> {
        return await RestaurantModel.create({...restaurant, ownedBy: uid})
    }

    // updateRestaurant (rid: string, restaurant: Restaurant): Promise<any>;
    // deleteRestaurant (rid: string): Promise<any>;
    // deleteRestaurantsByRestaurantName (restaurantName: string): Promise<any>;
}