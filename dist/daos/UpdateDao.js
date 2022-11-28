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
const UpdateModel_1 = __importDefault(require("../mongoose/UpdateModel"));
/**
 * @class UpdateDao Implements Data Access Object managing data storage
 * of Updates
 * @property {UpdateDao} updateDao Private single instance of UpdateDao
 */
class UpdateDao {
    constructor() { }
    /**
     * Uses UpdateModel to retrieve all update documents from updates collection
     * @returns Promise To be notified when the updates are retrieved from
     * database
     */
    findAllUpdates() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UpdateModel_1.default.find().populate('updatedBy', 'name').exec();
        });
    }
    /**
     * Uses UpdateModel to retrieve single update document by ID from updates collection
     * @param {string} updateId Update's primary key
     * @returns Promise To be notified when update is retrieved from the database
     */
    findUpdateById(updateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UpdateModel_1.default.findById(updateId).populate('updatedBy', 'name').exec();
        });
    }
    /**
     * Uses UpdateModel to retrieve all update documents from updates collection that were updateed
     * by a particular user
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when updates are retrieved from the database
     */
    findUpdatesByRestaurant(rid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UpdateModel_1.default.find({ updatedBy: rid }).populate('updatedBy', 'name').exec();
        });
    }
    /**
     * Inserts update instance into the database
     * @param {string} rid Restaurant updateing the update's primary key
     * @param {Update} update Instance to be inserted into the database
     * @returns Promise To be notified when update is inserted into the database
     */
    createUpdate(rid, update) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UpdateModel_1.default.create(Object.assign(Object.assign({}, update), { updatedBy: rid }));
        });
    }
    /**
     * Removes update from the database
     * @param {string} updateId Primary key of update to be removed
     * @returns Promise To be notified when update is removed from the database
     */
    deleteUpdate(updateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return UpdateModel_1.default.deleteOne({ _id: updateId });
        });
    }
}
exports.default = UpdateDao;
UpdateDao.updateDao = null;
/**
 * Creates singleton DAO instance
 * @returns UpdateDao
 */
UpdateDao.getInstance = () => {
    if (UpdateDao.updateDao === null) {
        UpdateDao.updateDao = new UpdateDao();
    }
    return UpdateDao.updateDao;
};
//# sourceMappingURL=UpdateDao.js.map