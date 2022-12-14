import {Request, Response} from "express";

/**
 * @file Declares RESTful Web service API for Follows resource
 */
export default interface FollowControllerI {
    userFollowsUser (req: Request, res: Response): void;
    userUnfollowsUser (req: Request, res: Response): void;
    findWhoIsFollowingMe (req: Request, res: Response): void;
    findWhoIAmFollowing (req: Request, res: Response): void;
    findUserIAmFollowing (req: Request, res: Response): void;
    findUserFollowingMe (req: Request, res: Response): void;
};