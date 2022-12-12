"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Controller RESTful Web service API for authentication
 */
const UserDao_1 = __importDefault(require("../daos/UserDao"));
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
class AuthenticationController {
    constructor() {
        /**
         * Signup and create a new user instance
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the user objects
         */
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const newUser = req.body;
            const existingUser = yield AuthenticationController.userDao
                .findUserByUsername(req.body.username);
            if (existingUser) {
                res.sendStatus(403);
                return;
            }
            else {
                const insertedUser = yield AuthenticationController.userDao
                    .createUser(newUser);
                // insertedUser.password = '';
                req.session['currentUser'] = insertedUser;
                return res.json(insertedUser);
            }
        });
        /**
         * Record a currently logged in user's info as the profile
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client
         */
        this.profile = (req, res) => {
            const profile = req.session['currentUser'];
            if (profile) {
                // profile.password = "";
                res.json(profile);
            }
            else {
                res.sendStatus(403);
            }
        };
        /**
         * Logout a currently logged in user and destroy the session's info
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client
         */
        this.logout = (req, res) => {
            req.session.destroy();
            res.sendStatus(200);
        };
        /**
         * Set an existing user as the logged-in user using the session
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client
         */
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const username = user.username;
            const password = user.password;
            const existingUser = yield AuthenticationController.userDao
                .findUserByUsername(username);
            if (!existingUser) {
                res.sendStatus(403);
                return;
            }
            const match = (password === existingUser.password);
            if (match) {
                req.session['currentUser'] = existingUser;
                return res.json(existingUser);
            }
            else {
                res.sendStatus(403);
            }
        });
    }
}
exports.default = AuthenticationController;
AuthenticationController.userDao = UserDao_1.default.getInstance();
AuthenticationController.authenticationController = null;
AuthenticationController.getInstance = (app) => {
    if (AuthenticationController.authenticationController === null) {
        AuthenticationController.authenticationController = new AuthenticationController();
        app.post("/api/auth/signup", AuthenticationController.authenticationController.signup);
        app.post("/api/auth/profile", AuthenticationController.authenticationController.profile);
        app.post("/api/auth/logout", AuthenticationController.authenticationController.logout);
        app.post("/api/auth/login", AuthenticationController.authenticationController.login);
    }
    return AuthenticationController.authenticationController;
};
//# sourceMappingURL=AuthenticationController.js.map