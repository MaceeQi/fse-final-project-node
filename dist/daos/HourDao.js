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
const HourModel_1 = __importDefault(require("../mongoose/HourModel"));
/**
 * @class HourDao Implements Data Access Object managing data storage
 * of Hours
 * @property {HourDao} hourDao Private single instance of HourDao
 */
class HourDao {
    constructor() { }
    /**
     * Uses HourModel to retrieve all hour documents from hours collection
     * @returns Promise To be notified when the hours are retrieved from
     * database
     */
    findAllHours() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HourModel_1.default.find().populate('restaurant', 'name').exec();
        });
    }
    /**
     * Uses HourModel to retrieve single hour document by ID from hours collection
     * @param {string} hid Hour's primary key
     * @returns Promise To be notified when hour is retrieved from the database
     */
    findHourById(hid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HourModel_1.default.findById(hid).populate('restaurant', 'name').exec();
        });
    }
    /**
     * Uses HourModel to retrieve all hour documents from hours collection that were posted
     * by a particular restaurant
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when hours are retrieved from the database
     */
    findHoursByRestaurant(rid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HourModel_1.default.find({ restaurant: rid }).populate('restaurant', 'name').exec();
        });
    }
    /**
     * Inserts hour instance into the database
     * @param {string} rid Restaurant posting the hour's primary key
     * @param {Hour} hour Instance to be inserted into the database
     * @returns Promise To be notified when hour is inserted into the database
     */
    createHour(rid, hour) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HourModel_1.default.create(Object.assign(Object.assign({}, hour), { restaurant: rid }));
        });
    }
    /**
     * Removes hour from the database
     * @param {string} hid Primary key of hour to be removed
     * @returns Promise To be notified when hour is removed from the database
     */
    deleteHour(hid) {
        return __awaiter(this, void 0, void 0, function* () {
            return HourModel_1.default.deleteOne({ _id: hid });
        });
    }
    /**
     * Updates hour with new values in database
     * @param {string} hid Primary key of hour to be modified
     * @param {any} hour Hour object containing properties and their new values
     * @returns Promise To be notified when hour is updated in the database
     */
    updateHour(hid, hour) {
        return __awaiter(this, void 0, void 0, function* () {
            return HourModel_1.default.updateOne({ _id: hid }, { $set: hour });
        });
    }
}
exports.default = HourDao;
HourDao.hourDao = null;
/**
 * Creates singleton DAO instance
 * @returns HourDao
 */
HourDao.getInstance = () => {
    if (HourDao.hourDao === null) {
        HourDao.hourDao = new HourDao();
    }
    return HourDao.hourDao;
};
//# sourceMappingURL=HourDao.js.map