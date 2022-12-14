"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../daos/UserDao"));
/**
 * @class UserController Implements RESTful Web service API for users resource
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users to retrieve all the user instances</li>
 *     <li>GET /api/users/:userid to retrieve an individual user instance </li>
 *     <li>POST /api/users to create a new user instance</li>
 *     <li>PUT /api/users/:userid to modify an individual user instance </li>
 *     <li>DELETE /api/users/:userid to remove a particular user instance</li>
 *     <li>DELETE /api/users to remove all user instances </li>
 *     <li>DELETE /api/users/username/:username/delete to remove a particular user instance with given username</li>
 *     <li>GET /api/users/type/:type to retrieve all user instances of given type</li>
 *     <li>GET /api/users/business/:rid to retrieve all user instances associated to given
 *     restaurant</li>
 *     <li>DELETE /api/users/business/:rid to remove all user instances associated to given
 *     restaurant</li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing user CRUD operations
 * @property {UserController} userController Singleton controller implementing
 * RESTful Web service API
 */
class UserController {
    constructor() {
        /**
         * Retrieves all users from the database and returns an array of users
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the user objects
         */
        this.findAllUsers = (req, res) => UserController.userDao.findAllUsers()
            .then(users => res.json(users));
        /**
         * Retrieves the user by their primary key
         * @param {Request} req Represents request from client, including path
         * parameter userid identifying the primary key of the user to be retrieved
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the user that matches the user ID
         */
        this.findUserById = (req, res) => UserController.userDao.findUserById(req.params.userid)
            .then(user => res.json(user));
        /**
         * Creates a new user instance
         * @param {Request} req Represents request from client, including body
         * containing the JSON object for the new user to be inserted in the
         * database
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new user that was inserted in the
         * database
         */
        this.createUser = (req, res) => UserController.userDao.createUser(req.body)
            .then(user => res.json(user));
        /**
         * Modifies an existing user instance
         * @param {Request} req Represents request from client, including path
         * parameter userid identifying the primary key of the user to be modified
         * and body containing the JSON object for the user to be updated in the
         * database
         * @param {Response} res Represents response to client, including status
         * on whether updating a user was successful or not
         */
        this.updateUser = (req, res) => UserController.userDao.updateUser(req.params.userid, req.body)
            .then(status => res.json(status));
        /**
         * Removes a user instance from the database
         * @param {Request} req Represents request from client, including path
         * parameter userid identifying the primary key of the user to be removed
         * @param {Response} res Represents response to client, including status
         * on whether deleting a user was successful or not
         */
        this.deleteUser = (req, res) => UserController.userDao.deleteUser(req.params.userid)
            .then(status => res.json(status));
        /**
         * Removes all user instances from the database
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including status
         * on whether deleting a user was successful or not
         */
        this.deleteAllUsers = (req, res) => UserController.userDao.deleteAllUsers()
            .then(status => res.json(status));
        /**
         * Removes a user instance from the database
         * @param {Request} req Represents request from client, including path
         * parameter username identifying the username of the user to be removed
         * @param {Response} res Represents response to client, including status
         * on whether deleting a user was successful or not
         */
        this.deleteUsersByUsername = (req, res) => UserController.userDao.deleteUsersByUsername(req.params.username)
            .then(status => res.json(status));
        /**
         * Retrieves all users from the database of given type and returns an array of users
         * @param {Request} req Represents request from client, including path parameter
         * type identifying the type of users to retrieve
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the user objects
         */
        this.findUsersByType = (req, res) => UserController.userDao.findUsersByType(req.params.type)
            .then(users => res.json(users));
        /**
         * Retrieves all users from the database that are associated to given restaurant
         * and returns an array of users
         * @param {Request} req Represents request from client, including path parameter
         * rid identifying the primary key of the restaurant that the users to be retrieved
         * are associated with
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the user objects
         */
        this.findUsersByRestaurant = (req, res) => UserController.userDao.findUsersByRestaurant(req.params.rid)
            .then(users => res.json(users));
        /**
         * Removes all user instances from the database that are associated to given restaurant
         * @param {Request} req Represents request from client, including path
         * parameter rid identifying the restaurant that the users to be removed are
         * associated with
         * @param {Response} res Represents response to client, including status
         * on whether deleting the users was successful or not
         */
        this.deleteUsersByRestaurant = (req, res) => UserController.userDao.deleteUsersByRestaurant(req.params.rid)
            .then(status => res.json(status));
    }
}
exports.default = UserController;
UserController.userDao = UserDao_1.default.getInstance();
UserController.userController = null;
/**
 * Creates singleton controller instance
 * @param {Express} app Express instance to declare the RESTful Web service
 * API
 * @returns UserController
 */
UserController.getInstance = (app) => {
    if (UserController.userController === null) {
        UserController.userController = new UserController();
        app.get('/api/users', UserController.userController.findAllUsers);
        app.get('/api/users/:userid', UserController.userController.findUserById);
        app.post('/api/users', UserController.userController.createUser);
        app.put('/api/users/:userid', UserController.userController.updateUser);
        app.delete('/api/users/:userid', UserController.userController.deleteUser);
        app.delete('/api/users', UserController.userController.deleteAllUsers);
        app.delete('/api/users/username/:username/delete', UserController.userController.deleteUsersByUsername);
        app.get('/api/users/type/:type', UserController.userController.findUsersByType);
        app.get('/api/users/business/:rid', UserController.userController.findUsersByRestaurant);
        app.delete('/api/users/business/:rid', UserController.userController.deleteUsersByRestaurant);
    }
    return UserController.userController;
};
//# sourceMappingURL=UserController.js.map