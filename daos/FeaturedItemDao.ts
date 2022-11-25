/**
 * @file Implements DAO managing data storage of items. Uses mongoose FeaturedItemModel
 * to integrate with MongoDB
 */
import FeaturedItem from "../models/FeaturedItem";
import FeaturedItemModel from "../mongoose/FeaturedItemModel";
import FeaturedItemDaoI from "../interfaces/FeaturedItemDaoI";

/**
 * @class FeaturedItemDao Implements Data Access Object managing data storage
 * of FeaturedItems
 * @property {FeaturedItemDao} featuredItemDao Private single instance of FeaturedItemDao
 */
export default class FeaturedItemDao implements FeaturedItemDaoI {
    private static featuredItemDao: FeaturedItemDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns FeaturedItemDao
     */
    public static getInstance = (): FeaturedItemDao => {
        if (FeaturedItemDao.featuredItemDao === null) {
            FeaturedItemDao.featuredItemDao = new FeaturedItemDao();
        }
        return FeaturedItemDao.featuredItemDao;
    }
    private constructor() {}

    /**
     * Uses FeaturedItemModel to retrieve all item documents from items collection
     * @returns Promise To be notified when the items are retrieved from
     * database
     */
    public async findAllFeaturedItems(): Promise<FeaturedItem[]> {
        return await FeaturedItemModel.find().populate('restaurant', 'name').exec();
    }

    /**
     * Uses FeaturedItemModel to retrieve single item document by ID from items collection
     * @param {string} itemId FeaturedItem's primary key
     * @returns Promise To be notified when item is retrieved from the database
     */
    public async findFeaturedItemById(itemId: string): Promise<FeaturedItem> {
        return await FeaturedItemModel.findById(itemId).populate('restaurant', 'name').exec();
    }

    /**
     * Uses FeaturedItemModel to retrieve all item documents from items collection that were posted
     * by a particular restaurant
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when items are retrieved from the database
     */
    public async findFeaturedItemsByRestaurant(rid: string): Promise<FeaturedItem[]> {
        return await FeaturedItemModel.find({restaurant: rid}).populate('restaurant', 'name').exec();
    }

    /**
     * Inserts item instance into the database
     * @param {string} rid Restaurant posting the item's primary key
     * @param {FeaturedItem} item Instance to be inserted into the database
     * @returns Promise To be notified when item is inserted into the database
     */
    public async createFeaturedItem(rid: string, item: FeaturedItem): Promise<FeaturedItem> {
        return await FeaturedItemModel.create({...item, restaurant: rid});
    }

    /**
     * Removes item from the database
     * @param {string} itemId Primary key of item to be removed
     * @returns Promise To be notified when item is removed from the database
     */
    public async deleteFeaturedItem(itemId: string): Promise<any> {
        return FeaturedItemModel.deleteOne({_id: itemId});
    }
}