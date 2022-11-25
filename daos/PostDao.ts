/**
 * @file Implements DAO managing data storage of posts. Uses mongoose PostModel
 * to integrate with MongoDB
 */
import Post from "../models/Post";
import PostModel from "../mongoose/PostModel";
import PostDaoI from "../interfaces/PostDaoI";

/**
 * @class PostDao Implements Data Access Object managing data storage
 * of Posts
 * @property {PostDao} postDao Private single instance of PostDao
 */
export default class PostDao implements PostDaoI {
    private static postDao: PostDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns PostDao
     */
    public static getInstance = (): PostDao => {
        if (PostDao.postDao === null) {
            PostDao.postDao = new PostDao();
        }
        return PostDao.postDao;
    }
    private constructor() {}

    /**
     * Uses PostModel to retrieve all post documents from posts collection
     * @returns Promise To be notified when the posts are retrieved from
     * database
     */
    public async findAllPosts(): Promise<Post[]> {
        return await PostModel.find().populate('postedBy', 'name').exec();
    }

    /**
     * Uses PostModel to retrieve single post document by ID from posts collection
     * @param {string} pid Post's primary key
     * @returns Promise To be notified when post is retrieved from the database
     */
    public async findPostById(pid: string): Promise<Post> {
        return await PostModel.findById(pid).populate('postedBy', 'name').exec();
    }

    /**
     * Uses PostModel to retrieve all post documents from posts collection that were posted
     * by a particular user
     * @param {string} rid Restaurant's primary key
     * @returns Promise To be notified when posts are retrieved from the database
     */
    public async findPostsByRestaurant(rid: string): Promise<Post[]> {
        return await PostModel.find({postedBy: rid}).populate('postedBy', 'name').exec();
    }

    /**
     * Inserts post instance into the database
     * @param {string} rid Restaurant posting the post's primary key
     * @param {Post} post Instance to be inserted into the database
     * @returns Promise To be notified when post is inserted into the database
     */
    public async createPost(rid: string, post: Post): Promise<Post> {
        return await PostModel.create({...post, postedBy: rid});
    }

    /**
     * Removes post from the database
     * @param {string} pid Primary key of post to be removed
     * @returns Promise To be notified when post is removed from the database
     */
    public async deletePost(pid: string): Promise<any> {
        return PostModel.deleteOne({_id: pid});
    }

    /**
     * Updates post with new values in database
     * @param {string} pid Primary key of post to be modified
     * @param {any} post Post object containing properties and their new values
     * @returns Promise To be notified when post is updated in the database
     */
    public async updatePost(pid: string, post: any): Promise<any> {
        return PostModel.updateOne(
            {_id: pid},
            {$set: {post: post}})
    }
}