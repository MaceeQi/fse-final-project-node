import {Request, Response} from "express";

/**
 * @file Declares RESTful Web service API for Users resource
 */
export default interface UserControllerI {
    findAllUsers (req: Request, res: Response): void;
    findUserById (req: Request, res: Response): void;
    createUser (req: Request, res: Response): void;
    updateUser (req: Request, res: Response): void;
    deleteUser (req: Request, res: Response): void;
    deleteAllUsers (req: Request, res: Response): void;
    deleteUsersByUsername (req: Request, res: Response): void;
    findUsersByType (req: Request, res: Response): void;
    findUsersByRestaurant (req: Request, res: Response): void;
    deleteUsersByRestaurant (req: Request, res: Response): void;
}
