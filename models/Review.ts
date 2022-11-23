import Tuit from "./Tuit";
import Restaurant from "./Restaurant";
import User from "./User";

export default interface Review {
    review: Tuit,
    restaurant: Restaurant,
    // critic: User
}