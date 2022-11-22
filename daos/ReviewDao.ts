import Review from "../models/Review";
import ReviewModel from "../mongoose/ReviewModel";
import ReviewDaoI from "../interfaces/ReviewDaoI";
import TuitModel from "../mongoose/TuitModel";

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

    public async createReview(criticID: string, restaurantID: string, review: Review): Promise<Review> {
        return await ReviewModel.create({...review, critic: criticID, restaurant: restaurantID});
    }

    public async deleteReview(reviewID: string): Promise<any> {
        return await TuitModel.deleteOne({_id: reviewID});
    }

    public async updateReview(reviewID: string, review: Review): Promise<any> {
        return Promise.resolve(undefined);
    }
}