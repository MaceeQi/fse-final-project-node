/**
 * @file Implements DAO managing data storage of reviews. Uses mongoose ReviewModel
 * to integrate with MongoDB
 */
import Review from "../models/Review";
import ReviewModel from "../mongoose/ReviewModel";
import ReviewDaoI from "../interfaces/ReviewDaoI";

/**
 * @class ReviewDao Implements Data Access Object managing data storage
 * of Reviews
 * @property {ReviewDao} reviewDao Private single instance of ReviewDao
 */
export default class ReviewDao implements ReviewDaoI {
    private static reviewDao: ReviewDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns ReviewDao
     */
    public static getInstance = (): ReviewDao => {
        if (ReviewDao.reviewDao === null) {
            ReviewDao.reviewDao = new ReviewDao();
        }
        return ReviewDao.reviewDao;
    }
    private constructor() {}

    /**
     * Uses ReviewModel to retrieve all reviews from reviews collection
     * @returns Promise To be notified when the reviews are retrieved from database
     */
    public async findAllReviews(): Promise<Review[]> {
        return await ReviewModel.find().populate("critic").exec();
    }

    /**
     * Uses ReviewModel to retrieve all reviews by a single critic from reviews collection
     * @param {string} criticID Critic's primary key
     * @returns Promise To be notified when reviews are retrieved from the database
     */
    public async findAllReviewsByCritic(criticID: string): Promise<Review[]> {
        return await ReviewModel.find({critic: criticID}).populate("critic").exec();
    }

    /**
     * Uses ReviewModel to retrieve all reviews for a single restaurant from reviews collection
     * @param {string} restaurantID Restaurant's primary key
     * @returns Promise To be notified when reviews are retrieved from the database
     */
    public async findAllReviewsForRestaurant(restaurantID: string): Promise<Review[]> {
        return await ReviewModel.find({restaurant: restaurantID}).populate("critic").exec();
    }

    /**
     * Uses ReviewModel to retrieve a single review for with given ID from reviews collection
     * @param {string} reviewID Review's primary key
     * @returns Promise To be notified when review is retrieved from the database
     */
    public async findReviewById(reviewID: string): Promise<Review> {
        return await ReviewModel.findById(reviewID).populate("critic").exec();
    }

    /**
     * Inserts review instance into the database
     * @param {string} criticID User posting the review's primary key
     * @param {string} restaurantID Restaurant being reviewed's primary key
     * @param {Review} review Review given by the critic about the restaurant
     * @returns Promise To be notified when review is inserted into the database
     */
    public async createReview(criticID: string, restaurantID: string, review: Review): Promise<Review> {
        return await ReviewModel.create({...review, critic: criticID, restaurant: restaurantID});
    }

    /**
     * Removes review from the database
     * @param {string} reviewID Primary key of review to be removed
     * @returns Promise To be notified when review is removed from the database
     */
    public async deleteReview(reviewID: string): Promise<any> {
        return await ReviewModel.deleteOne({_id: reviewID});
    }

    /**
     * Updates review with new values in database
     * @param {string} reviewID Primary key of review to be modified
     * @param {any} review Object containing the new review
     * @returns Promise To be notified when review is updated in the database
     */
    public async updateReview(reviewID: string, review: any): Promise<any> {
        return ReviewModel.updateOne({_id: reviewID}, {$set: {review: review.review}});
    }
}