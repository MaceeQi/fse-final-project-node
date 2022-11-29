/**
 * @file Controller RESTful Web service API for reviews resource
 */
import {Request, Response, Express} from "express";
import ReviewDao from "../daos/ReviewDao";
import ReviewControllerI from "../interfaces/ReviewControllerI";

/**
 * @class TuitController Implements RESTful Web service API for reviews resource
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/reviews to retrieve all the reviews instances</li>
 *     <li>GET /api/restaurants/:restaurantid/reviews to retrieve reviews for a given restaurant </li>
 *     <li>GET /api/users/:criticid/reviews to retrieve reviews by a given critic </li>
 *     <li>GET /api/reviews/:reviewid to retrieve a particular review instance</li>
 *     <li>POST /api/restaurants/:restaurantid/users/:criticid/reviews to create a new review instance</li>
 *     <li>PUT /api/reviews/:reviewid to modify an individual review instance </li>
 *     <li>DELETE /api/reviews/:reviewid to remove a particular review instance</li>
 * </ul>
 * @property {ReviewDao} reviewDao Singleton DAO implementing review CRUD operations
 * @property {ReviewController} review Controller Singleton controller implementing RESTful Web service API
 */
export default class ReviewController implements ReviewControllerI {
    private static reviewController: ReviewController | null = null;
    private static reviewDao: ReviewDao = ReviewDao.getInstance();

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service API
     * @return ReviewController
     */
    public static getInstance = (app: Express): ReviewController => {
        if (ReviewController.reviewController === null) {
            ReviewController.reviewController = new ReviewController();
            app.get("/api/reviews", ReviewController.reviewController.findAllReviews);
            app.get("/api/restaurants/:restaurantid/reviews", ReviewController.reviewController.findAllReviewsForRestaurant);
            app.get("/api/users/:criticid/reviews", ReviewController.reviewController.findAllReviewsByCritic);
            app.get("/api/reviews/:reviewid", ReviewController.reviewController.findReviewById);
            app.post("/api/restaurants/:restaurantid/users/:criticid/reviews", ReviewController.reviewController.createReview);
            app.put("/api/reviews/:reviewid", ReviewController.reviewController.updateReview);
            app.delete("/api/reviews/:reviewid", ReviewController.reviewController.deleteReview);
        }
        return ReviewController.reviewController;
    }
    private constructor() {}

    /**
     * Creates a new review instance
     * @param {Request} req Represents request from client, including path
     * parameter criticid identifying the primary key of the user that created
     * the review, restaurantid identifying the primary key of the restaurant being reviewed
     * and body containing the JSON object for the new review to be inserted in the database
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new review that was inserted in the
     * database
     */
    createReview = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .createReview(req.params.criticid, req.params.restaurantid, req.body)
            .then(review => res.json(review));

    /**
     * Modifies an existing review instance
     * @param {Request} req Represents request from client, including path
     * parameter reviewid identifying the primary key of the review to be modified
     * and body containing the JSON object for the new review for the review
     * to be updated to in the database
     * @param {Response} res Represents response to client, including status
     * on whether updating a review was successful or not
     */
    updateReview = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .updateReview(req.params.reviewid, req.body)
            .then(review => res.json(review));

    /**
     * Removes a review instance from the database
     * @param {Request} req Represents request from client, including path
     * parameter reviewid identifying the primary key of the review to be removed
     * @param {Response} res Represents response to client, including status
     * on whether deleting a review was successful or not
     */
    deleteReview = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .deleteReview(req.params.reviewid)
            .then(review => res.json(review));

    /**
     * Retrieves all reviews from the database and returns an array of reviews
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the reviews objects
     */
    findAllReviews = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .findAllReviews()
            .then(reviews => res.json(reviews));

    /**
     * Retrieves all reviews from the database by a particular critic and returns
     * an array of reviews
     * @param {Request} req Represents request from client, including path
     * parameter criticid identifying the primary key of the critic to retrieve
     * all their reviews given
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the review objects
     */
    findAllReviewsByCritic = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .findAllReviewsByCritic(req.params.criticid)
            .then(reviews => res.json(reviews));

    /**
     * Retrieves all reviews from the database for a particular restaurant and returns
     * an array of reviews
     * @param {Request} req Represents request from client, including path
     * parameter restaurantid identifying the primary key of the restaurant to retrieve
     * all their reviews received
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the review objects
     */
    findAllReviewsForRestaurant = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .findAllReviewsForRestaurant(req.params.restaurantid)
            .then(reviews => res.json(reviews));

    /**
     * Retrieves the review by their primary key
     * @param {Request} req Represents request from client, including path
     * parameter reviewid identifying the primary key of the review to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the review that matches the reviewid
     */
    findReviewById = (req: Request, res: Response) =>
        ReviewController.reviewDao
            .findReviewById(req.params.reviewid)
            .then(reviews => res.json(reviews));
}