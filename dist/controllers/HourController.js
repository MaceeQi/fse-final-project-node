"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HourDao_1 = __importDefault(require("../daos/HourDao"));
/**
 * @class HourController Implements RESTful Web service API for hours resource
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/hours to retrieve all the hour instances</li>
 *     <li>GET /api/hours/:hid to retrieve a particular hour instance</li>
 *     <li>GET /api/restaurants/:rid/hours to retrieve hours for a given restaurant </li>
 *     <li>POST /api/restaurants/:rid/hours to create a new hour instance</li>
 *     <li>DELETE /api/hours/:hid to remove a particular hour instance</li>
 *     <li>PUT /api/hours/:hid to modify an individual hour instance </li>
 * </ul>
 * @property {HourDao} hourDao Singleton DAO implementing hour CRUD operations
 * @property {HourController} hourController Singleton controller implementing
 * RESTful Web service API
 */
class HourController {
    constructor() {
        /**
         * Retrieves all hours from the database and returns an array of hours
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the hour objects
         */
        this.findAllHours = (req, res) => HourController.hourDao.findAllHours().then(hours => res.json(hours));
        /**
         * Retrieves all hours from the database for a particular restaurant and returns
         * an array of hours
         * @param {Request} req Represents request from client, including path
         * parameter rid identifying the primary key of the restaurant to retrieve
         * all their hours
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the hour objects
         */
        this.findHoursByRestaurant = (req, res) => HourController.hourDao.findHoursByRestaurant(req.params.rid)
            .then(hours => res.json(hours));
        /**
         * Retrieves the hour by their primary key
         * @param {Request} req Represents request from client, including path
         * parameter hid identifying the primary key of the hour to be retrieved
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the hour that matches the hour ID
         */
        this.findHourById = (req, res) => HourController.hourDao.findHourById(req.params.hid).then(hour => res.json(hour));
        /**
         * Creates a new hour instance
         * @param {Request} req Represents request from client, including path
         * parameter rid identifying the primary key of the restaurant that created
         * the hour and body containing the JSON object for the new hour to be
         * inserted in the database
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new hour that was inserted in the
         * database
         */
        this.createHour = (req, res) => HourController.hourDao.createHour(req.params.rid, req.body)
            .then(actualHour => res.json(actualHour));
        /**
         * Removes an hour instance from the database
         * @param {Request} req Represents request from client, including path
         * parameter hid identifying the primary key of the hour to be removed
         * @param {Response} res Represents response to client, including status
         * on whether deleting an hour was successful or not
         */
        this.deleteHour = (req, res) => HourController.hourDao.deleteHour(req.params.hid).then(status => res.json(status));
        /**
         * Modifies an existing hour instance
         * @param {Request} req Represents request from client, including path
         * parameter hid identifying the primary key of the hour to be modified
         * and body containing the JSON object for the hour to be updated in the
         * database
         * @param {Response} res Represents response to client, including status
         * on whether updating an hour was successful or not
         */
        this.updateHour = (req, res) => HourController.hourDao.updateHour(req.params.hid, req.body).then(status => res.json(status));
    }
}
exports.default = HourController;
HourController.hourController = null;
HourController.hourDao = HourDao_1.default.getInstance();
/**
 * Creates singleton controller instance
 * @param {Express} app Express instance to declare the RESTful Web service
 * API
 * @return HourController
 */
HourController.getInstance = (app) => {
    if (HourController.hourController === null) {
        HourController.hourController = new HourController();
        app.get('/api/hours', HourController.hourController.findAllHours);
        app.get('/api/restaurants/:rid/hours', HourController.hourController.findHoursByRestaurant);
        app.get('/api/hours/:hid', HourController.hourController.findHourById);
        app.post('/api/restaurants/:rid/hours', HourController.hourController.createHour);
        app.put('/api/hours/:hid', HourController.hourController.updateHour);
        app.delete('/api/hours/:hid', HourController.hourController.deleteHour);
    }
    return HourController.hourController;
};
//# sourceMappingURL=HourController.js.map