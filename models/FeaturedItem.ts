import Restaurant from "./Restaurant";

/**
 * @interface
 * @typedef {FeaturedItem} FeatureItem Represents a restaurant open hour object interface
 * @property {string} food Restaurant featured food items
 * @property {string} price Price
 * @property {string} photo Food photo
 * @property {boolean} popular Food's popularity
 * @property {Restaurant} restaurant Restaurant
 */
export default interface FeaturedItem {
    food: string,
    price: string,
    photo?: string,
    popular: boolean,
    restaurant: Restaurant
}