"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FeaturedItemDao_1 = __importDefault(require("../daos/FeaturedItemDao"));
/**
 * @class FeaturedItemController Implements RESTful Web service API for featured-items resource
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/items to retrieve all the FeaturedItem instances</li>
 *     <li>GET /api/restaurants/:rid/items to retrieve FeaturedItems of a restaurant</li>
 *     <li>GET /api/items/:itemId to retrieve an individual FeaturedItem instance</li>
 *     <li>POST /api/restaurants/:rid/items to create a new FeaturedItem instance</li>
 *     <li>DELETE /api/items/:itemId to remove a particular FeaturedItem instance</li>
 * </ul>
 * @property {FeaturedItemDao} featuredItemDao Singleton DAO implementing featuredItem CRUD operations
 * @property {FeaturedItemController} featuredItemController Singleton controller implementing
 * RESTful Web service API
 */
class FeaturedItemController {
    constructor() {
        /**
         * Retrieves all featuredItems from the database and returns an array of featuredItems
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the featuredItem objects
         */
        this.findAllFeaturedItems = (req, res) => FeaturedItemController.featuredItemDao.findAllFeaturedItems()
            .then(featuredItems => res.json(featuredItems));
        /**
         * Retrieves the featuredItem by the restaurant id
         * @param {Request} req Represents request from client, including path
         * parameter rid identifying the primary key of the restaurant
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the featuredItem that matches the restaurant id
         */
        this.findFeaturedItemsByRestaurant = (req, res) => FeaturedItemController.featuredItemDao.findFeaturedItemsByRestaurant(req.params.rid)
            .then(featuredItem => res.json(featuredItem));
        /**
         * Retrieves the featuredItem by their primary key
         * @param {Request} req Represents request from client, including path
         * parameter itemId identifying the primary key of the featuredItem to be retrieved
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the featuredItem that matches the featuredItem ID
         */
        this.findFeaturedItemById = (req, res) => FeaturedItemController.featuredItemDao.findFeaturedItemById(req.params.itemId)
            .then(featuredItem => res.json(featuredItem));
        /**
         * Creates a new featuredItem instance
         * @param {Request} req Represents request from client, including restaurant
         * primary key and body containing the JSON object for the new featuredItem to be
         * inserted in the database
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new featuredItem that was inserted in the
         * database
         */
        this.createFeaturedItem = (req, res) => FeaturedItemController.featuredItemDao.createFeaturedItem(req.params.rid, req.body)
            .then(featuredItem => res.json(featuredItem));
        /**
         * Removes a featuredItem instance from the database
         * @param {Request} req Represents request from client, including path
         * parameter itemId identifying the primary key of the featuredItem to be removed
         * @param {Response} res Represents response to client, including status
         * on whether deleting a featuredItem was successful or not
         */
        this.deleteFeaturedItem = (req, res) => FeaturedItemController.featuredItemDao.deleteFeaturedItem(req.params.itemId)
            .then(status => res.json(status));
    }
}
exports.default = FeaturedItemController;
FeaturedItemController.featuredItemDao = FeaturedItemDao_1.default.getInstance();
FeaturedItemController.featuredItemController = null;
/**
 * Creates singleton controller instance
 * @param {Express} app Express instance to declare the RESTful Web service
 * API
 * @returns FeaturedItemController
 */
FeaturedItemController.getInstance = (app) => {
    if (FeaturedItemController.featuredItemController === null) {
        FeaturedItemController.featuredItemController = new FeaturedItemController();
        app.get('/api/items', FeaturedItemController.featuredItemController
            .findAllFeaturedItems);
        app.get('/api/restaurants/:rid/items', FeaturedItemController.featuredItemController
            .findFeaturedItemsByRestaurant);
        app.get('/api/items/:itemId', FeaturedItemController.featuredItemController
            .findFeaturedItemById);
        app.post('/api/restaurants/:rid/items', FeaturedItemController.featuredItemController
            .createFeaturedItem);
        app.delete('/api/items/:itemId', FeaturedItemController.featuredItemController
            .deleteFeaturedItem);
    }
    return FeaturedItemController.featuredItemController;
};
//# sourceMappingURL=FeaturedItemController.js.map