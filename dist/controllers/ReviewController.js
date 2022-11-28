"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReviewDao_1 = __importDefault(require("../daos/ReviewDao"));
class ReviewController {
    constructor() {
        this.createReview = (req, res) => ReviewController.reviewDao
            .createReview(req.params.criticid, req.params.restaurantid, req.body)
            .then(review => res.json(review));
        this.updateReview = (req, res) => ReviewController.reviewDao
            .updateReview(req.params.reviewid, req.body)
            .then(review => res.json(review));
        this.deleteReview = (req, res) => ReviewController.reviewDao
            .deleteReview(req.params.reviewid)
            .then(review => res.json(review));
        this.findAllReviews = (req, res) => ReviewController.reviewDao
            .findAllReviews()
            .then(reviews => res.json(reviews));
        this.findAllReviewsByCritic = (req, res) => ReviewController.reviewDao
            .findAllReviewsByCritic(req.params.criticid)
            .then(reviews => res.json(reviews));
        this.findAllReviewsForRestaurant = (req, res) => ReviewController.reviewDao
            .findAllReviewsForRestaurant(req.params.restaurantid)
            .then(reviews => res.json(reviews));
        this.findReviewById = (req, res) => ReviewController.reviewDao
            .findReviewById(req.params.reviewid)
            .then(reviews => res.json(reviews));
    }
}
exports.default = ReviewController;
ReviewController.reviewController = null;
ReviewController.reviewDao = ReviewDao_1.default.getInstance();
ReviewController.getInstance = (app) => {
    if (ReviewController.reviewController === null) {
        ReviewController.reviewController = new ReviewController();
        app.get("/api/reviews", ReviewController.reviewController.findAllReviews);
        app.get("/api/restaurant/:restaurantid/reviews", ReviewController.reviewController.findAllReviewsForRestaurant);
        app.get("/api/users/:criticid/reviews", ReviewController.reviewController.findAllReviewsByCritic);
        app.get("/api/reviews/:reviewid", ReviewController.reviewController.findReviewById);
        app.post("/api/restaurant/:restaurantid/users/:criticid/reviews", ReviewController.reviewController.createReview);
        app.put("/api/reviews/:reviewid", ReviewController.reviewController.updateReview);
        app.delete("/api/reviews/:reviewid", ReviewController.reviewController.deleteReview);
    }
    return ReviewController.reviewController;
};
//# sourceMappingURL=ReviewController.js.map