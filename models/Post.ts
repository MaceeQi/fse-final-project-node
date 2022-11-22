import Restaurant from "./Restaurant";

/**
 * @interface
 * @typedef {Post} Post Represents a restaurant posted announcements interface
 * @property {string} post Restaurant post text
 * @property {Restaurant} postedBy Restaurant
 */
export default interface Post {
    post: string,
    postedBy: Restaurant
}