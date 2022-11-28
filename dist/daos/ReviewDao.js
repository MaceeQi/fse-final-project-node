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
const ReviewModel_1 = __importDefault(require("../mongoose/ReviewModel"));
/**
 * @class ReviewDao Implements Data Access Object managing data storage
 * of Reviews
 * @property {ReviewDao} reviewDao Private single instance of ReviewDao
 */
class ReviewDao {
    constructor() { }
    /**
     * Uses ReviewModel to retrieve all reviews from reviews collection
     * @returns Promise To be notified when the reviews are retrieved from database
     */
    findAllReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ReviewModel_1.default.find().populate("critic").exec();
        });
    }
    /**
     * Uses ReviewModel to retrieve all reviews by a single critic from reviews collection
     * @param {string} criticID Critic's primary key
     * @returns Promise To be notified when reviews are retrieved from the database
     */
    findAllReviewsByCritic(criticID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ReviewModel_1.default.find().populate("critic").find({ postedBy: criticID }).exec();
        });
    }
    /**
     * Uses ReviewModel to retrieve all reviews for a single restaurant from reviews collection
     * @param {string} restaurantID Restaurant's primary key
     * @returns Promise To be notified when reviews are retrieved from the database
     */
    findAllReviewsForRestaurant(restaurantID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ReviewModel_1.default.find({ restaurant: restaurantID }).populate("critic").exec();
        });
    }
    /**
     * Uses ReviewModel to retrieve a single review for with given ID from reviews collection
     * @param {string} reviewID Review's primary key
     * @returns Promise To be notified when review is retrieved from the database
     */
    findReviewById(reviewID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ReviewModel_1.default.findById(reviewID).populate("critic").exec();
        });
    }
    /**
     * Inserts review instance into the database
     * @param {string} criticID User posting the review's primary key
     * @param {string} restaurantID Restaurant being reviewed's primary key
     * @param {Review} review Review given by the critic about the restaurant
     * @returns Promise To be notified when review is inserted into the database
     */
    createReview(criticID, restaurantID, review) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ReviewModel_1.default.create(Object.assign(Object.assign({}, review), { critic: criticID, restaurant: restaurantID }));
        });
    }
    /**
     * Removes review from the database
     * @param {string} reviewID Primary key of review to be removed
     * @returns Promise To be notified when review is removed from the database
     */
    deleteReview(reviewID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ReviewModel_1.default.deleteOne({ _id: reviewID });
        });
    }
    /**
     * Updates review with new values in database
     * @param {string} reviewID Primary key of review to be modified
     * @param {any} review Object containing the new review
     * @returns Promise To be notified when review is updated in the database
     */
    updateReview(reviewID, review) {
        return __awaiter(this, void 0, void 0, function* () {
            return ReviewModel_1.default.updateOne({ _id: reviewID }, { $set: { review: review.review } });
        });
    }
}
exports.default = ReviewDao;
ReviewDao.reviewDao = null;
/**
 * Creates singleton DAO instance
 * @returns ReviewDao
 */
ReviewDao.getInstance = () => {
    if (ReviewDao.reviewDao === null) {
        ReviewDao.reviewDao = new ReviewDao();
    }
    return ReviewDao.reviewDao;
};
//# sourceMappingURL=ReviewDao.js.map