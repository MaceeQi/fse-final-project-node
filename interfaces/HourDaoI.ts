import Hour from "../models/Hour";

/**
 * @file Declares API for Hours related data access object methods
 */
export default interface HourDaoI {
    findAllHours (): Promise<Hour[]>;
    findHoursByRestaurant (rid: string): Promise<Hour[]>;
    findHourById (hid: string): Promise<Hour>;
    createHour (rid: string, hour: Hour): Promise<Hour>;
    updateHour (hid: string, hour: Hour): Promise<any>;
    deleteHour (hid: string): Promise<any>;
}