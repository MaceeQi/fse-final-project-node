import Restaurant from "../models/Restaurant";

/**
 * @file Declares API for Restaurants related data access object methods
 */
export default interface RestaurantDaoI {
    findAllRestaurants (): Promise<Restaurant[]>;
    findRestaurantById (rid: string): Promise<Restaurant>;
    createRestaurant (restaurant: Restaurant): Promise<Restaurant>;
    updateRestaurant (rid: string, restaurant: Restaurant): Promise<any>;
    deleteRestaurant (rid: string): Promise<any>;
    deleteRestaurantsByRestaurantName (username: string): Promise<any>;
}