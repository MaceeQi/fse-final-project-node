import Review from "../models/Review";

export default interface ReviewDaoI {
    findAllReviews(): Promise<Review[]>;
    findAllReviewsByCritic(criticID: string): Promise<Review[]>;
    findAllReviewsForRestaurant(restaurantID: string): Promise<Review[]>;
    findReviewById(reviewID: string): Promise<Review>;
    createReview(criticID: string, restaurantID: string, review: Review): Promise<Review>;
    updateReview(reviewID: string, review: Review): Promise<any>;
    deleteReview(reviewID: string): Promise<any>;
}