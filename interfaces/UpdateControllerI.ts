import {Request, Response} from "express";
import Update from "../models/Update";

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
