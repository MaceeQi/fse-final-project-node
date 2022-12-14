/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>follows</li>
 *     <li>bookmarks</li>
 *     <li>messages</li>
 *     <li>reviews</li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */
import express from 'express';
import {Request, Response} from "express";
import * as mongoose from "mongoose";
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import ReviewController from "./controllers/ReviewController";
import RestaurantController from "./controllers/RestaurantController";
import UpdateController from "./controllers/UpdateController";
import FeaturedItemController from "./controllers/FeaturedItemController";
import HourController from "./controllers/HourController";
import AuthenticationController from "./controllers/AuthenticationController";

const session = require("express-session");

var cors = require('cors');

const app = express();  // express is a library  that allows you to create HTTP servers
// app.use(cors());        // cors is tech that allows you to have people outside your domain to connect safely to your server
const corsConfig = {
    origin: ['http://localhost:3000', 'https://team6-tuiter-restaurants-fse.netlify.app'],
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsConfig));

app.use(express.json());        // configuring our server so that it can parse json; json = format that data will be formatted as

let sess = {
    // secret: process.env.REACT_APP_API_BASE,
    secret: 'http://localhost:4000',
    cookie: {
        secure: false
    },
    resave: false,
    saveUninitialized: true
}

if (process.env.ENV === 'PRODUCTION') {
    app.set('trust proxy', 1)
    sess.cookie.secure = true
}

app.use(session(sess));

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}
//mongoose.connect('mongodb://localhost:27017/tuiter', options);   // connect to mongo compass - local tuiter database

require('dotenv').config();

// build the connection string
const PROTOCOL = "mongodb+srv";
const DB_USERNAME = "restaurants";
const DB_PASSWORD = "fseteam6";
const HOST = "cluster0.wxmcfmp.mongodb.net";
const DB_NAME = "tuiter";
const DB_QUERY = "retryWrites=true&w=majority";
const connectionString = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?${DB_QUERY}`;
// connect to the database
// mongoose.connect("mongodb+srv://restaurants:fseteam6@cluster0.wxmcfmp.mongodb.net/tuiter?retryWrites=true&w=majority")'
mongoose.connect(connectionString, options);


function sayHello(req: Request, res: Response) {
    res.send('Welcome to Foundation of Software Engineering!');
}

// Where we configure server to listen to incoming requests / messages
// HTTP Methods: get, post, put, delete
app.get('/', sayHello);    // get function takes 2 args (string, function); string = pattern of url

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

// create RESTful Web service API
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likeController = LikeController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);
const reviewController = ReviewController.getInstance(app)
const restaurantController = RestaurantController.getInstance(app);
const updateController = UpdateController.getInstance(app);
const featuredItemController = FeaturedItemController.getInstance(app);
const hourController = HourController.getInstance(app);
const authenticationController = AuthenticationController.getInstance(app);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on AWS if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);