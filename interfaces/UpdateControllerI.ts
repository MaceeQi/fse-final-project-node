import {Request, Response} from "express";

/**
 * @file Declares RESTful Web service API for Updates resource
 */
export default interface UpdateControllerI {
    findAllUpdates(req: Request, res: Response): void;
    findUpdatesByRestaurant(req: Request, res: Response): void;
    findUpdateById(req: Request, res: Response): void;
    createUpdate(req: Request, res: Response): void;
    deleteUpdate(req: Request, res: Response): void;
}
