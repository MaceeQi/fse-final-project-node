/**
 * @file Implements DAO managing data storage of users. Uses mongoose UserModel
 * to integrate with MongoDB
 */
import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDaoI";

/**
 * @class UserDao Implements Data Access Object managing data storage
 * of Users
 * @property {UserDao} userDao Private single instance of UserDao
 */
export default class UserDao implements UserDaoI {
    private static userDao: UserDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns UserDao
     */
    public static getInstance = (): UserDao => {
        if(UserDao.userDao === null) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    }
    private constructor() {}

    /**
     * Uses UserModel to retrieve all user documents from users collection
     * @returns Promise To be notified when the users are retrieved from
     * database
     */
    findAllUsers = async (): Promise<User[]> =>
        UserModel.find().exec();

    /**
     * Uses UserModel to retrieve single user document from users collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when user is retrieved from the database
     */
    findUserById = async (uid: string): Promise<User> =>
        UserModel.findById(uid);

    /**
     * Inserts user instance into the database
     * @param {User} user Instance to be inserted into the database
     * @returns Promise To be notified when user is inserted into the database
     */
    createUser = async (user: User): Promise<User> =>
        UserModel.create(user);

    /**
     * Removes user from the database
     * @param {string} uid Primary key of user to be removed
     * @returns Promise To be notified when user is removed from the database
     */
    deleteUser = async (uid: string): Promise<any> =>
        UserModel.deleteOne({_id: uid});

    /**
     * Updates user with new values in database
     * @param {string} uid Primary key of user to be modified
     * @param {any} user User object containing properties and their new values
     * @returns Promise To be notified when user is updated in the database
     */
    updateUser = async (uid: string, user: User): Promise<any> =>
        UserModel.updateOne({_id: uid}, {$set: user});

    /**
     * Removes all users from the database
     * @returns Promise To be notified when all users are removed from the database
     */
    deleteAllUsers = async (): Promise<any> =>
        UserModel.deleteMany({});

    /**
     * Removes user from the database
     * @param {string} username Username of user to be removed
     * @returns Promise To be notified when user is removed from the database
     */
    deleteUsersByUsername = async (username: string): Promise<any> =>
        UserModel.deleteMany({username});

    /**
     * Uses UserModel to retrieve user documents from users collection of given type
     * @param {string} type Type of user
     * @returns Promise To be notified when users are retrieved from the database
     */
    findUsersByType = async (type: string): Promise<User[]> =>
        UserModel.find({type});

    /**
     * Uses UserModel to retrieve user documents from users collection that are
     * associated with the given restaurant
     * @param {string} rid Primary key of the restaurant
     * @returns Promise To be notified when users are retrieved from the database
     */
    findUsersByRestaurant = async (rid: string): Promise<User[]> =>
        UserModel.find({business: rid});

    /**
     * Removes users from the database that are associated with the given restaurant
     * @param {string} rid Primary key of the restaurant
     * @returns Promise To be notified when users are removed from the database
     */
    deleteUsersByRestaurant = async (rid: string): Promise<any> =>
        UserModel.deleteMany({business: rid});

    /**
     * Uses UserModel to retrieve a user documentation from users collection by
     * its username
     * @returns Promise To be notified when the user is retrieved from
     * database
     */
    findUserByUsername = async (username: string): Promise<any> =>
        UserModel.findOne({username});
}
