import Post from "../models/Post";

/**
 * @file Declares API for Posts related data access object methods
 */
export default interface PostDaoI {
    findAllPosts (): Promise<Post[]>;
    findPostsByRestaurant (rid: string): Promise<Post[]>;
    findPostById (pid: string): Promise<Post>;
    createPost (rid: string, post: Post): Promise<Post>;
    updatePost (pid: string, post: Post): Promise<any>;
    deletePost (pid: string): Promise<any>;
}