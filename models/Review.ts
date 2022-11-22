import User from "./User";
import Tuit from "./Tuit";
// import Restaurant from "./Restaurant";

export default interface Review {
    review: Tuit,
    critic: User,
    // restaurant: Restaurant
}