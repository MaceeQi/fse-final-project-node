import {Request, Response} from "express";

/**
 * @file Declares RESTful Web service API for FeaturedItems resource
 */
export default interface FeaturedItemControllerI {
    findAllFeaturedItems(req: Request, res: Response): void;
    findFeaturedItemsByRestaurant(req: Request, res: Response): void;
    findFeaturedItemById(req: Request, res: Response): void;
    createFeaturedItem(req: Request, res: Response): void;
    deleteFeaturedItem(req: Request, res: Response): void;
}
