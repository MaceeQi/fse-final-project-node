/**
 * @file Controller RESTful Web service API for authentication
 */
import UserDao from "../daos/UserDao";
import {Express} from "express";

/**
 * @class AuthenticationController Implements RESTful Web service API for users resource
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/auth/signup to signup and create a new user instance</li>
 *     <li>POST /api/auth/profile to create a new user profile</li>
 *     <li>POST /api/auth/logout to logout a user from the current session</li>
 *     <li>POST /api/auth/login to login an existing user</li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing user CRUD operations
 * @property {AuthenticationController} authenticationController Singleton controller implementing
 * RESTful Web service API
 */
export default class AuthenticationController {

    private static userDao: UserDao = UserDao.getInstance();
    private static authenticationController: AuthenticationController | null = null;

    public static getInstance = (app: Express): AuthenticationController => {
        if (AuthenticationController.authenticationController === null) {
            AuthenticationController.authenticationController = new AuthenticationController();
            app.post("/api/auth/signup",
                AuthenticationController.authenticationController.signup);
            app.post("/api/auth/profile",
                AuthenticationController.authenticationController.profile);
            app.post("/api/auth/logout",
                AuthenticationController.authenticationController.logout);
            app.post("/api/auth/login",
                AuthenticationController.authenticationController.login);
        }
        return AuthenticationController.authenticationController;
    }

    private constructor() {}

    /**
     * Signup and create a new user instance
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects
     */
    signup = async (req, res) => {
        const newUser = req.body;
        const existingUser = await AuthenticationController.userDao
            .findUserByUsername(req.body.username);
        if (existingUser) {
            res.sendStatus(403);
            return;
        } else {
            const insertedUser = await AuthenticationController.userDao
                .createUser(newUser);
            // insertedUser.password = '';
            req.session['currentUser'] = insertedUser;
            return res.json(insertedUser);
        }
    }

    /**
     * Record a currently logged in user's info as the profile
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    profile = (req, res) => {
        const profile = req.session['currentUser'];
        if (profile) {
            // profile.password = "";
            res.json(profile);
        } else {
            res.sendStatus(403);
        }
    }

    /**
     * Logout a currently logged in user and destroy the session's info
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

    /**
     * Set an existing user as the logged-in user using the session
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    login = async (req, res) => {
        const user = req.body;
        const username = user.username;
        const password = user.password;
        const existingUser = await AuthenticationController.userDao
            .findUserByUsername(username);

        if (!existingUser) {
            res.sendStatus(403);
            return;
        }

        const match = (password === existingUser.password);

        if (match) {
            req.session['currentUser'] = existingUser;
            return res.json(existingUser);
        } else {
            res.sendStatus(403);
        }
    };
}