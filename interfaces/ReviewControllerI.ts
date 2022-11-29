import {Request, Response} from "express";

/**
 * @file Declares RESTful Web service API for Reviews resource
 */
export default interface ReviewControllerI {
    createReview (req: Request, res: Response): void;
    updateReview (req: Request, res: Response): void;
    deleteReview (req: Request, res: Response): void;
    findAllReviews (req: Request, res: Response): void;
    findAllReviewsByCritic (req: Request, res: Response): void;
    findAllReviewsForRestaurant (req: Request, res: Response): void;
    findReviewById (req: Request, res: Response): void;
}