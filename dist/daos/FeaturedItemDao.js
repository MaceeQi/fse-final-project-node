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
const FeaturedItemModel_1 = __importDefault(require("../mongoose/FeaturedItemModel"));
/**
 * @class FeaturedItemDao Implements Data Access Object managing data storage
 * of FeaturedItems
 * @property {FeaturedItemDao} featuredItemDao Private single instance of FeaturedItemDao
 */
class FeaturedItemDao {
    constructor() { }
    /**
     * Uses FeaturedItemModel to retrieve all item documents from items collection
     * @returns Promise To be notified when the items are retrieved from
     * database
     */
    findAllFeaturedItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return FeaturedItemModel_1.default.find();
        });
    }
    /**
     * Uses FeaturedItemModel to retrieve single item document by ID from items collection
     * @param {string} itemId FeaturedItem's primary key
     * @returns Promise To be notified when item is retrieved from the database
     */
    findFeaturedItemById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return FeaturedItemModel_1.default.findById(itemId);
        });
    }
    /**
     * Uses FeaturedItemModel to retrieve all item documents from items collection that were posted
     * by a particular restaurant
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when items are retrieved from the database
     */
    findFeaturedItemsByRestaurant(rid) {
        return __awaiter(this, void 0, void 0, function* () {
            return FeaturedItemModel_1.default.find({ restaurant: rid });
        });
    }
    /**
     * Inserts item instance into the database
     * @param {string} rid Restaurant posting the item's primary key
     * @param {FeaturedItem} item Instance to be inserted into the database
     * @returns Promise To be notified when item is inserted into the database
     */
    createFeaturedItem(rid, item) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FeaturedItemModel_1.default.create(Object.assign(Object.assign({}, item), { restaurant: rid }));
        });
    }
    /**
     * Removes item from the database
     * @param {string} itemId Primary key of item to be removed
     * @returns Promise To be notified when item is removed from the database
     */
    deleteFeaturedItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return FeaturedItemModel_1.default.deleteOne({ _id: itemId });
        });
    }
}
exports.default = FeaturedItemDao;
FeaturedItemDao.featuredItemDao = null;
/**
 * Creates singleton DAO instance
 * @returns FeaturedItemDao
 */
FeaturedItemDao.getInstance = () => {
    if (FeaturedItemDao.featuredItemDao === null) {
        FeaturedItemDao.featuredItemDao = new FeaturedItemDao();
    }
    return FeaturedItemDao.featuredItemDao;
};
//# sourceMappingURL=FeaturedItemDao.js.map