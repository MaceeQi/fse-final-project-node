import {Request, Response} from "express";

/**
 * @file Declares RESTful Web service API for Restaurants resource
 */
export default interface RestaurantControllerI {
    findAllRestaurants (req: Request, res: Response): void;
    findRestaurantById (req: Request, res: Response): void;
    createRestaurant (req: Request, res: Response): void;
    updateRestaurant (req: Request, res: Response): void;
    deleteRestaurant (req: Request, res: Response): void;
    deleteRestaurantsByRestaurantName (req: Request, res: Response): void;
}
