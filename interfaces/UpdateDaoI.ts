import Update from "../models/Update";

/**
 * @file Declares API for Updates related data access object methods
 */
export default interface UpdateDaoI {
    findAllUpdates (): Promise<Update[]>;
    findUpdatesByRestaurant (rid: string): Promise<Update[]>;
    findUpdateById (updateId: string): Promise<Update>;
    createUpdate (rid: string, update: Update): Promise<Update>;
    deleteUpdate (updateId: string): Promise<any>;
}