import Restaurant from "./Restaurant";

/**
 * @interface
 * @typedef {Update} Update Represents a restaurant posted announcements interface
 * @property {string} update Restaurant update text
 * @property {Restaurant} updatedBy Restaurant
 */
export default interface Update {
    update: string,
    updatedBy: Restaurant
}