/**
 * @interface
 * @typedef {FeatureItem} FeatureItem Represents a restaurant open hour object interface
 * @property {string} food Restaurant featured food items
 * @property {string} price Price
 * @property {string} photo Food photo
 * @property {boolean} popular Food' popularity
 */

export default interface FeatureItem {
    food: string,
    price: string,
    photo?: string,
    popular: boolean;
}