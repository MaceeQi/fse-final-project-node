import {Request, Response} from "express";

/**
 * @file Declares RESTful Web service API for Hours resource
 */
export default interface HourControllerI {
    findAllHours (req: Request, res: Response): void;
    findHoursByRestaurant (req: Request, res: Response): void;
    findHourById (req: Request, res: Response): void;
    createHour (req: Request, res: Response): void;
    updateHour (req: Request, res: Response): void;
    deleteHour (req: Request, res: Response): void;
}
