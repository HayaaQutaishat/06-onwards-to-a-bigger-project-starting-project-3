# Meetups-NextJS-Project

Welcome to the Meetups Next.js App!


This simple application is a basic full-stack web application built using Next.js as the front-end framework and React for UI components, and MongoDB Atlas as the back-end database. The purpose of this project is to provide a simple, scalable and modular solution for building and deploying full-stack web applications.


<img width="1440" alt="Screen Shot 2023-02-08 at 3 56 45 PM" src="https://user-images.githubusercontent.com/95029840/217836971-4dddc073-3387-480b-8d87-e6ce47eba43d.png">


### Project purpose :

This application is structured into a number of pages which are theHome page which is a page shows all the meetups that exist in the database. "Add New Meetup" page for adding a brand new Meetup. And a "Meetup Detailed" page, which is the page we go to when click on a signle meetup. This application uses MongoDB Atlas as a backend for storing and retrieving data.


This application uses the built-in server-side rendering capabilities of Next.js to fetch and display the data from database. 



<img width="1440" alt="Screen Shot 2023-02-09 at 9 39 34 AM" src="https://user-images.githubusercontent.com/95029840/217865551-698420ed-2a19-4f07-be2f-377300ffe818.png">

When users submit the form for adding a new meetup, a request is sent from the frontend to my custom API routes. These API routes then connect to a MongoDB database, allowing for the storage of user-submitted data.


<img width="1440" alt="Screen Shot 2023-02-09 at 9 39 55 AM" src="https://user-images.githubusercontent.com/95029840/217866211-e9bdf6f8-4f92-4e70-8cfc-9ce00aa5af3a.png">



## Technologies used :

-  React
-  Next.js
- MongoDB Atlas
- Static Site Generation (SSG)




## Prerequisites :

Before you can run this app, you will need to have the following software installed on your machine:

- Node.js
- npm (which comes with Node)
- MongoDB 


## Setting up the app :

- Clone the repository: git clone https://github.com/[USERNAME]/react-product-ordering.git
- Navigate to the project directory: cd react-product-ordering
- Install all dependencies: run npm install
- Install the MongoDB driver: npm install mongodb (This command will download and install the latest version of the MongoDB driver, allowing you to connect to and interact with a MongoDB database from your Node.js application)
- Start the development server: run npm start


This will install all necessary dependencies and start the development server. The app will be available at http://localhost:3000 in your browser.
