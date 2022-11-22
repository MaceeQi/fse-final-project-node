/**
 * @typedef {Restaurant} Restaurant Represents a restaurant object interface
 * @property {string} name Restaurant name
 * @property {string} bannerPicture Banner picture
 * @property {string} profilePicture Avatar picture
 * @property {string} handle Restaurant account handle
 * @property {string} bio Restaurant bio
 * @property {string} cuisine Restaurant cuisine type
 * @property {string} price Restaurant price range
 * @property {string} address Restaurant address
 * @property {string} hours Restaurant open hours
 * @property {Hour} hours Restaurant open hours
 * @property {string} phone Restaurant phone number
 * @property {string} website Restaurant website
 * @property {Post} posts Restaurant updates announcements
 * @property {FeatureItem} featured Restaurant featured items
 */
export default interface Restaurant {
    "name": string,
    "bannerPicture": string,
    "profilePicture": string,
    "handle": string,
    "bio": string,
    "cuisine": string,
    "price": string,
    "address": string,
    "hours": Hour[],
    "phone": string,
    "website": string,
    "posts": Post[],
    "featured": FeatureItem[]
}