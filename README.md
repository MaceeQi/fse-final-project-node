# Restaurant Feature for Tuiter

Tuiter is a social networking website that allows users to connect with a bigger audience and share
their thoughts. Users can follow people, keep updated on trending news, and communicate with
friends through Tuiter.

As a social media site, many users not only want to see news updates or other user’s posts but
also be able to search for various businesses. Especially with restaurants, it would be beneficial
for both users and restaurant owners for users to be able to search for restaurants and for
businesses to be able to share updates regarding their business. There were many times when we have
visited a restaurant anticipating it to be open or to have a specific menu but found it to be
unexpectedly closed or discontinued an item on their menu. To resolve this, we created a feature
for users to be able to search for restaurants to see business information, updates, and restaurant
reviews.

When signing up for Tuiter, you can choose three different account types: average, business, and
critic.

### 1. Average user

As an average user, users will be able to search for restaurants and view information including
business information and any posts made by the business on Tuiter, and any reviews made by a
professional food critic on Tuiter. Users can view a list of restaurants by clicking the
restaurants tab. Detailed information of the restaurants can be viewed by clicking on the
restaurant of interest.

### 2. Business user

As a restaurant owner, users will be able to advertise the restaurant in the Tuiter community so
that guests would be able to get information about the open hours, featured dishes, discounts, and
professional food critics’ reviews of their restaurant. Users can create and update their business
page by clicking on the profile tab and clicking the create business profile button.

### 3. Critic user

As a professional food critic, users will be able to leave critical reviews for a restaurant by
going to the restaurant’s profile and creating reviews. When logged in as a critic, users will be
able to see a section on each restaurant’s business page to leave a review for that restaurant.
Users will also be able to update or delete their previously created reviews.

![architecture](./public/images/architecture.jpeg)

The figure above depicts the high-level architecture of the Restaurant Feature. The front end uses
React and Javascript to create Tuiter Business Account Interface. It communicates with the backend
service to create, retrieve, update, and delete user data and restaurants' business account
information. The frontend service implements the application logic: displaying information on a
business's Tuiter page, allowing business owners to input and update information pertaining to their
restaurant. Critics can write a review for a business on said business's Tuiter page. All users can
view a business's information on its Tuiter page, along with any reviews left by critics.
The backend service implements the application logic: keeping track of different types of users
(normal users, restaurant business owners, and professional food critics). Normal users can search
and view restaurant information and reviews, restaurant business owners can update and post business
information for Tuiter users to view, and professional food critics can leave reviews for a
restaurant's business.

## Running this app locally

Running the application locally entails running both the backend service and a frontend.

## Starting the backend
You can start it in master branch of the `fse-final-project-node` directory by running `npm run build`
(the first time you run it, you will also need to run `npm install`).

## Running the frontend
In the master branch of the `fse-final-project-react` directory, run `npm start` (you'll need to run
npm install the very first time you run it). After several moments (or minutes, depending on the
speed of your machine), a browser will open with the frontend running locally. The frontend will
automatically re-compile and reload in your browser if you change any files in the
`fse-final-project-react/src` directory.

## Links

GitHub repos
* Front End: https://github.com/MaceeQi/fse-final-project-react
* Back End: https://github.com/MaceeQi/fse-final-project-node

## Authors
* Chanon Bovornvirakit (bovornc)
* Macee Qi (MaceeQi)
* Yena Shin (t1yena)
* Yutong He (nala-he)


