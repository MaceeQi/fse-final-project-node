import FeaturedItem from "../models/FeaturedItem";

/**
 * @file Declares API for FeaturedItems related data access object methods
 */
export default interface FeaturedItemDaoI {
    findAllFeaturedItems (): Promise<FeaturedItem[]>;
    findFeaturedItemsByRestaurant (rid: string): Promise<FeaturedItem[]>;
    findFeaturedItemById (itemId: string): Promise<FeaturedItem>;
    createFeaturedItem (rid: string, item: FeaturedItem): Promise<FeaturedItem>;
    deleteFeaturedItem (itemId: string): Promise<any>;
}