import Tuit from "../models/Tuit";
import Review from "../models/Review";
import ReviewModel from "../mongoose/ReviewModel";
import ReviewDaoI from "../interfaces/ReviewDaoI";

export default class ReviewDao implements ReviewDaoI {
    private static reviewDao: ReviewDao | null = null;
    public static getInstance = (): ReviewDao => {
        if (ReviewDao.reviewDao === null) {
            ReviewDao.reviewDao = new ReviewDao();
        }
        return ReviewDao.reviewDao;
    }
    private constructor() {}

    public async findAllReviews(): Promise<Review[]> {
        return await ReviewModel.find().populate("review", "critic").exec();
    }

    public async findAllReviewsByCritic(criticID: string): Promise<Review[]> {
        return await ReviewModel.find({critic: criticID}).populate("review", "critic").exec();
    }

    public async findAllReviewsForRestaurant(restaurantID: string): Promise<Review[]> {
        return await ReviewModel.find({restaurant: restaurantID}).populate("review", "critic").exec();
    }

    public async findReviewById(reviewID: string): Promise<Review> {
        return await ReviewModel.findById(reviewID).populate("review", "critic").exec();
    }

    public async createReview(criticID: string, restaurantID: string, review: Tuit): Promise<Review> {
        return await ReviewModel.create({...review, critic: criticID, restaurant: restaurantID});
    }

    public async deleteReview(reviewID: string): Promise<any> {
        return await ReviewModel.deleteOne({_id: reviewID});
    }

    public async updateReview(reviewID: string, review: Tuit): Promise<any> {
        return ReviewModel.updateOne({_id: reviewID}, {$set: {review: review}});
    }
}