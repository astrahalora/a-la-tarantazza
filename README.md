# About

Fully responsive MERN project (restaurant with order and product management) initialized with Vite, complete with:

- custom designed images 
- easy navigation with react-router-dom
- redux state managemenet 
- functional components
- MongoDB server connection for data
- loading, error, 404 missing pages

![A La Tarantazza main page](https://images2.imgbox.com/a8/7c/koSqdu5J_o.jpg)

# Technologies 

- React (frontend JavaScript library for building user interfaces based on components)
- Node.js (backend JavaScript runtime environment)
- Express.js (backend web application framework for building RESTful APIs with Node.js)
- MongoDB (NoSQL database program)
- CSS (for styling)

# Setup

## Server side

### Install dependencies

Open the terminal and navigate to the server directory. Once inside, run this command:

```
npm install
```

### Connect to MongoDB

This server runs based on a MongoDB cluster. You need a MongoDB account and available cluster to initialize the database.

Create a .env file in the server directory.

Check out the .env.example file to see how the link to your cluster is recommended to look. Fill out the .env file with this info (can copy paste the example and change the username and password).

### Generate products for restaurant

```
npm run populate
```

### Starting the server

Run the following command in your terminal while inside the server directory:

```
node server
```

To run it with nodemon:

```
npm run dev
```

Your local server should now be running!

## Client side

### Install Dependencies

Open the terminal and navigate to the client directory. Once inside, run this command:

```
npm install
```

### Start client 

From inside the client directory, run this command in the terminal:

```
npm run dev
```

You should see in the terminal that the client has been started at: http://localhost:5173/
You can CTRL + click on the link or copy + paste it in your browser. 

# Credits

- bow icon from flaticon by Nur syifa fauziah
- Quote icon created by Icon Mela - Flaticon
- Heart icon created by Chanut - Flaticon
- LeonardoAi created base product images, image slider banners, error & loading & page missing images
