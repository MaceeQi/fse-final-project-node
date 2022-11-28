/**
 * @file Controller RESTful WEb service API for updates resource
 */
import {Request, Response, Express} from "express";
import UpdateDao from "../daos/UpdateDao";
import UpdateControllerI from "../interfaces/UpdateControllerI";

/**
 * @class UpdateController Implements RESTful Web service API for updates resource
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/updates to retrieve all the update instances</li>
 *     <li>GET /api/restaurants/:rid/updates to retrieve updates of a restaurant</li>
 *     <li>GET /api/updates/:updateId to retrieve an individual update instance</li>
 *     <li>POST /api/restaurants/:rid/updates to create a new update instance</li>
 *     <li>DELETE /api/updates/:updateId to remove a particular update instance</li>
 * </ul>
 * @property {UpdateDao} updateDao Singleton DAO implementing update CRUD operations
 * @property {UpdateController} updateController Singleton controller implementing
 * RESTful Web service API
 */
export default class UpdateController implements UpdateControllerI {
    private static updateDao: UpdateDao = UpdateDao.getInstance();
    private static updateController: UpdateController | null = null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @returns UpdateController
     */
    public static getInstance = (app: Express): UpdateController => {
        if(UpdateController.updateController === null) {
            UpdateController.updateController = new UpdateController();

            app.get('/api/updates', UpdateController.updateController.findAllUpdates);
            app.get('/api/restaurants/:rid/updates', UpdateController.updateController.findUpdatesByRestaurant);
            app.get('/api/updates/:updateId', UpdateController.updateController.findUpdateById);
            app.post('/api/restaurants/:rid/updates', UpdateController.updateController.createUpdate);
            app.delete('/api/updates/:updateId', UpdateController.updateController.deleteUpdate);
        }
        return UpdateController.updateController;
    }
    private constructor() {}

    /**
     * Retrieves all updates from the database and returns an array of updates
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the update objects
     */
    findAllUpdates = (req: Request, res: Response) =>
        UpdateController.updateDao.findAllUpdates()
            .then(updates => res.json(updates));

    /**
     * Retrieves the update by the restaurant id
     * @param {Request} req Represents request from client, including path
     * parameter rid identifying the primary key of the restaurant
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the update that matches the restaurant id
     */
    findUpdatesByRestaurant = (req: Request, res: Response) =>
        UpdateController.updateDao.findUpdatesByRestaurant(req.params.rid)
            .then(update => res.json(update));

    /**
     * Retrieves the update by their primary key
     * @param {Request} req Represents request from client, including path
     * parameter updateId identifying the primary key of the update to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the update that matches the update ID
     */
    findUpdateById = (req: Request, res: Response) =>
        UpdateController.updateDao.findUpdateById(req.params.updateId)
            .then(update => res.json(update));

    /**
     * Creates a new update instance
     * @param {Request} req Represents request from client, including restaurant
     * primary key and body containing the JSON object for the new update to be
     * inserted in the database
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new update that was inserted in the
     * database
     */
    createUpdate = (req: Request, res: Response) =>
        UpdateController.updateDao.createUpdate(req.params.rid, req.body)
            .then(update => res.json(update));

    /**
     * Removes an update instance from the database
     * @param {Request} req Represents request from client, including path
     * parameter updateId identifying the primary key of the update to be removed
     * @param {Response} res Represents response to client, including status
     * on whether deleting an update was successful or not
     */
    deleteUpdate = (req: Request, res: Response) =>
        UpdateController.updateDao.deleteUpdate(req.params.updateId)
            .then(status => res.json(status));
}
