# Meetups-NextJS-Project

Welcome to the Meetups Next.js App!


This simple application is a basic full-stack web application built using Next.js as the front-end framework and React for UI components, and MongoDB Atlas as the back-end database. 

<img width="1440" alt="Screen Shot 2023-02-08 at 3 56 45 PM" src="https://user-images.githubusercontent.com/95029840/217836971-4dddc073-3387-480b-8d87-e6ce47eba43d.png">


### Project purpose :

This application is structured into a number of pages which are theHome page which is a page shows all the meetups that exist in the database. "Add New Meetup" page for adding a brand new Meetup. And a "Meetup Detailed" page, which is the page we go to when click on a signle meetup. This application uses MongoDB Atlas as a backend for storing and retrieving data.


This application uses the built-in server-side rendering capabilities of Next.js to fetch and display the data from database. "getStaticProps" function is used to fetch the data from the database during the build time, which means that the data will be pre-rendered on the page before it is even served to the user. This results in a faster loading time, since the data is already available on the page, and the user does not have to wait for the data to be fetched from the database.


<img width="1440" alt="Screen Shot 2023-02-09 at 9 39 34 AM" src="https://user-images.githubusercontent.com/95029840/217865551-698420ed-2a19-4f07-be2f-377300ffe818.png">

When users submit the form for adding a new meetup, a request is sent from the frontend to my custom API routes. These API routes then connect to a MongoDB database, allowing for the storage of user-submitted data. Once the users submit the form, they will be programmatically navigated to another page using the useRoute() react hook.


The API routes act as the intermediary between the frontend and the database, processing the incoming request and retrieving the necessary information from the MongoDB database. This information is then returned to the frontend and displayed to the user. The use of API routes in combination with MongoDB allows for seamless and efficient data processing, storage, and retrieval, providing a smooth user experience.
 

<img width="1440" alt="Screen Shot 2023-02-09 at 9 39 55 AM" src="https://user-images.githubusercontent.com/95029840/217866211-e9bdf6f8-4f92-4e70-8cfc-9ce00aa5af3a.png">


This app utilizes CSS modules for styling its components. CSS modules allow for modular and reusable styles to be written in a scoped manner, so that styles are only applied to the intended components and do not leak out to affect unintended parts of the app. 


This app utilizes head metadata, which refers to information that is placed in the head section of a web page's HTML code. This metadata provides additional information about the page, such as its title, description, and keywords, which is used by search engines to better understand the content and context of the page. Additionally, head metadata can also be used to specify various other settings, such as the character set, viewport size, and stylesheets to be used by the page.


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
