/**
 * @file Implements DAO managing data storage of hours. Uses mongoose HourModel
 * to integrate with MongoDB
 */
import Hour from "../models/Hour";
import HourModel from "../mongoose/HourModel";
import HourDaoI from "../interfaces/HourDaoI";

/**
 * @class HourDao Implements Data Access Object managing data storage
 * of Hours
 * @property {HourDao} hourDao Private single instance of HourDao
 */
export default class HourDao implements HourDaoI {
    private static hourDao: HourDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns HourDao
     */
    public static getInstance = (): HourDao => {
        if (HourDao.hourDao === null) {
            HourDao.hourDao = new HourDao();
        }
        return HourDao.hourDao;
    }
    private constructor() {}

    /**
     * Uses HourModel to retrieve all hour documents from hours collection
     * @returns Promise To be notified when the hours are retrieved from
     * database
     */
    public async findAllHours(): Promise<Hour[]> {
        return await HourModel.find().populate('restaurant', 'name').exec();
    }

    /**
     * Uses HourModel to retrieve single hour document by ID from hours collection
     * @param {string} hid Hour's primary key
     * @returns Promise To be notified when hour is retrieved from the database
     */
    public async findHourById(hid: string): Promise<Hour> {
        return await HourModel.findById(hid).populate('restaurant', 'name').exec();
    }

    /**
     * Uses HourModel to retrieve all hour documents from hours collection that were posted
     * by a particular restaurant
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when hours are retrieved from the database
     */
    public async findHoursByRestaurant(rid: string): Promise<Hour[]> {
        return await HourModel.find({restaurant: rid}).populate('restaurant', 'name').exec();
    }

    /**
     * Inserts hour instance into the database
     * @param {string} rid Restaurant posting the hour's primary key
     * @param {Hour} hour Instance to be inserted into the database
     * @returns Promise To be notified when hour is inserted into the database
     */
    public async createHour(rid: string, hour: Hour): Promise<Hour> {
        return await HourModel.create({...hour, restaurant: rid});
    }

    /**
     * Removes hour from the database
     * @param {string} hid Primary key of hour to be removed
     * @returns Promise To be notified when hour is removed from the database
     */
    public async deleteHour(hid: string): Promise<any> {
        return HourModel.deleteOne({_id: hid});
    }

    /**
     * Updates hour with new values in database
     * @param {string} hid Primary key of hour to be modified
     * @param {any} hour Hour object containing properties and their new values
     * @returns Promise To be notified when hour is updated in the database
     */
    public async updateHour(hid: string, hour: Hour): Promise<any> {
        return HourModel.updateOne(
            {_id: hid},
            {$set: hour})
    }
}