/**
 * @file Controller RESTful Web service API for restaurants resource
 */
import {Request, Response, Express} from "express";
import RestaurantDao from "../daos/RestaurantDao";
import RestaurantControllerI from "../interfaces/RestaurantControllerI";

/**
 * @class RestaurantController Implements RESTful Web service API for restaurants resource
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/restaurants to retrieve all the restaurant instances</li>
 *     <li>GET /api/restaurants/:rid to retrieve a particular restaurant instance</li>
 *     <li>POST /api/users/:uid/restaurants to create a new restaurant instance</li>
 *     <li>PUT /api/restaurants/:rid to modify an individual restaurant instance </li>
 *     <li>DELETE /api/restaurants/:rid to remove a particular restaurant instance</li>
 *      <li>DELETE /api/restaurants/name/:name/delete to remove a particular restaurant instance by
 *      its name
 *      </li>
 * </ul>
 * @property {RestaurantDao} restaurantDao Singleton DAO implementing restaurant CRUD operations
 * @property {RestaurantController} restaurantController Singleton controller implementing
 * RESTful Web service API
 */
export default class RestaurantController implements RestaurantControllerI {
    private static restaurantController: RestaurantController | null = null;
    private static restaurantDao: RestaurantDao = RestaurantDao.getInstance();

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return RestaurantController
     */
    public static getInstance = (app: Express): RestaurantController => {
        if (RestaurantController.restaurantController === null) {
            RestaurantController.restaurantController = new RestaurantController();

            app.get('/api/restaurants', RestaurantController.restaurantController.findAllRestaurants);
            app.get('/api/restaurants/:rid', RestaurantController.restaurantController.findRestaurantById);
            app.post('/api/users/:uid/restaurants', RestaurantController.restaurantController.createRestaurant);
            app.put('/api/restaurants/:rid', RestaurantController.restaurantController.updateRestaurant);
            app.delete('/api/restaurants/:rid', RestaurantController.restaurantController.deleteRestaurant);
            app.delete('/api/restaurants/name/:name/delete',
                RestaurantController.restaurantController.deleteRestaurantsByRestaurantName);
        }
        return RestaurantController.restaurantController;
    }
    private constructor() {}

    /**
     * Retrieves all restaurants from the database and returns an array of restaurants
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the restaurant objects
     */
    findAllRestaurants = (req: Request, res: Response) =>
        RestaurantController.restaurantDao.findAllRestaurants()
            .then(restaurants => res.json(restaurants));

    /**
     * Retrieves the restaurant by their primary key
     * @param {Request} req Represents request from client, including path
     * parameter rid identifying the primary key of the restaurant to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the restaurant that matches the restaurant ID
     */
    findRestaurantById = (req: Request, res: Response) =>
        RestaurantController.restaurantDao.findRestaurantById(req.params.rid)
            .then(restaurant => res.json(restaurant));


    /**
     * Creates a new restaurant instance
     * @param {Request} req Represents request from client, including path
     * parameter uid identifying the primary key of the user that created
     * the restaurant and body containing the JSON object for the new restaurant to be
     * inserted in the database
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new restaurant that was inserted in the
     * database
     */
    createRestaurant = (req: Request, res: Response) =>
        RestaurantController.restaurantDao.createRestaurant(req.params.uid, req.body)
            .then(actualRestaurant => res.json(actualRestaurant));

    /**
     * Modifies an existing restaurant instance
     * @param {Request} req Represents request from client, including path
     * parameter rid identifying the primary key of the restaurant to be modified
     * and body containing the JSON object for the restaurant to be updated in the
     * database
     * @param {Response} res Represents response to client, including status
     * on whether updating a restaurant was successful or not
     */
    updateRestaurant = (req: Request, res: Response) =>
        RestaurantController.restaurantDao.updateRestaurant(req.params.rid, req.body)
            .then(status => res.json(status));

    /**
     * Removes a restaurant instance from the database
     * @param {Request} req Represents request from client, including path
     * parameter rid identifying the primary key of the restaurant to be removed
     * @param {Response} res Represents response to client, including status
     * on whether deleting a restaurant was successful or not
     */
    deleteRestaurant = (req: Request, res: Response) =>
        RestaurantController.restaurantDao.deleteRestaurant(req.params.rid)
            .then(status => res.json(status));

    /**
     * Removes a restaurant instance from the database
     * @param {Request} req Represents request from client, including path
     * parameter name identifying the name of the restaurant to be removed
     * @param {Response} res Represents response to client, including status
     * on whether deleting a restaurant was successful or not
     */
    deleteRestaurantsByRestaurantName = (req: Request, res: Response) =>
        RestaurantController.restaurantDao.deleteRestaurantsByRestaurantName(req.params.name)
            .then(status => res.json(status));
}