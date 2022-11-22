
/**
 * @interface
 * @typedef {Hour} Hour Represents a restaurant open hour object interface
 * @property {string} weekday Restaurant cuisine type
 * @property {string} hours Restaurant open hours
 */

export default interface Hour {
    weekday: string,
    hours: string,
}