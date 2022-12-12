/**
 * @file Implements DAO managing data storage of updates. Uses mongoose UpdateModel
 * to integrate with MongoDB
 */
import Update from "../models/Update";
import UpdateModel from "../mongoose/UpdateModel";
import UpdateDaoI from "../interfaces/UpdateDaoI";

/**
 * @class UpdateDao Implements Data Access Object managing data storage
 * of Updates
 * @property {UpdateDao} updateDao Private single instance of UpdateDao
 */
export default class UpdateDao implements UpdateDaoI {
    private static updateDao: UpdateDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns UpdateDao
     */
    public static getInstance = (): UpdateDao => {
        if (UpdateDao.updateDao === null) {
            UpdateDao.updateDao = new UpdateDao();
        }
        return UpdateDao.updateDao;
    }
    private constructor() {}

    /**
     * Uses UpdateModel to retrieve all update documents from updates collection
     * @returns Promise To be notified when the updates are retrieved from
     * database
     */
    public async findAllUpdates(): Promise<Update[]> {
        return UpdateModel.find();
    }

    /**
     * Uses UpdateModel to retrieve single update document by ID from updates collection
     * @param {string} updateId Update's primary key
     * @returns Promise To be notified when update is retrieved from the database
     */
    public async findUpdateById(updateId: string): Promise<Update> {
        return UpdateModel.findById(updateId);
    }

    /**
     * Uses UpdateModel to retrieve all update documents from updates collection that were updateed
     * by a particular user
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when updates are retrieved from the database
     */
    public async findUpdatesByRestaurant(rid: string): Promise<Update[]> {
        return UpdateModel.find({updatedBy: rid});
    }

    /**
     * Inserts update instance into the database
     * @param {string} rid Restaurant updateing the update's primary key
     * @param {Update} update Instance to be inserted into the database
     * @returns Promise To be notified when update is inserted into the database
     */
    public async createUpdate(rid: string, update: Update): Promise<Update> {
        return await UpdateModel.create({...update, updatedBy: rid});
    }

    /**
     * Removes update from the database
     * @param {string} updateId Primary key of update to be removed
     * @returns Promise To be notified when update is removed from the database
     */
    public async deleteUpdate(updateId: string): Promise<any> {
        return UpdateModel.deleteOne({_id: updateId});
    }
}