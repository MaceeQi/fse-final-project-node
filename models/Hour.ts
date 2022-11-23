import Restaurant from "./Restaurant";

/**
 * @interface
 * @typedef {Hour} Hour Represents a restaurant open hour object interface
 * @property {string} weekday Restaurant cuisine type
 * @property {string} hour Restaurant open hours
 * @property {Restaurant} restaurant Restaurant
 */
export default interface Hour {
    weekday: string,
    hour: string,
    restaurant: Restaurant
}