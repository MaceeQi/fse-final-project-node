import Update from "../models/Update";

/**
 * @file Declares API for Updates related data access object methods
 */
export default interface UpdateDaoI {
    findAllUpdates (): Promise<Update[]>;
    findUpdatesByRestaurant (rid: string): Promise<Update[]>;
    findUpdateById (updateId: string): Promise<Update>;
    createUpdate (rid: string, update: Update): Promise<Update>;
    updateUpdate (updateId: string, update: Update): Promise<any>;
    deleteUpdate (updateId: string): Promise<any>;
}