import {Request, Response, Express} from "express";
import ReviewDao from "../daos/ReviewDao";
import ReviewControllerI from "../interfaces/ReviewControllerI";

export default class ReviewController implements ReviewControllerI {
    private static reviewController: ReviewController | null = null;
    private static reviewDao: ReviewDao = ReviewDao.getInstance();

    public static getInstance = (app: Express): ReviewController => {
        if (ReviewController.reviewController === null) {
            ReviewController.reviewController = new ReviewController();
            app.get("/api/reviews", ReviewController.reviewController.findAllReviews);
            app.get("/api/restaurant/:restaurantid/reviews", ReviewController.reviewController.findAllReviewsForRestaurant);
            app.get("/api/users/:criticid/reviews", ReviewController.reviewController.findAllReviewsByCritic);
            app.post("/api/restaurant/:restaurantid/users/:criticid/reviews", ReviewController.reviewController.createReview);
            app.put("/api/restaurant/:restaurantid/users/:criticid/reviews/:reviewid", ReviewController.reviewController.updateReview);
            app.delete("/api/restaurant/:restaurantid/users/:criticid/reviews/:reviewid", ReviewController.reviewController.deleteReview);
        }
        return ReviewController.reviewController;
    }
    private constructor() {}

    createReview = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .createReview(req.params.criticid, req.params.restaurantid, req.body)
            .then(review => res.json(review));

    updateReview = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .updateReview(req.params.reviewid, req.body)
            .then(review => res.json(review));

    deleteReview = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .deleteReview(req.params.reviewid)
            .then(review => res.json(review));

    findAllReviews = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .findAllReviews()
            .then(reviews => res.json(reviews));

    findAllReviewsByCritic = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .findAllReviewsByCritic(req.params.criticid)
            .then(reviews => res.json(reviews));

    findAllReviewsForRestaurant = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .findAllReviewsForRestaurant(req.params.restaurantid)
            .then(reviews => res.json(reviews));

    findReviewById = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .findReviewById(req.params.reviewid)
            .then(reviews => res.json(reviews));
}