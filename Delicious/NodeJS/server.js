import express from "express";
import mongoose from "mongoose";
import { routes } from './routes/restaurants.routes.js'
import { userRoutes } from "./routes/users.routes.js";
import cors from "cors";
import { menuRoutes } from "./routes/restaurantMenu.routes.js";
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5100;

//create application server
const app = express();

app.use(cors());    // middleware to enable cross origin
app.use(express.json());    // built in middleware for JSON Parsing


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

// pass app to the routes to add routes
routes(app);
userRoutes(app);
menuRoutes(app);

// (create cluster) -> then connect server to DB
mongoose.connect(MONGODB_URI);


const db = mongoose.connection;

// handle connection events
db.on("error", (error) => {
    console.log("Connection failed due to:", error);
})

db.on("open", () => {
    console.log("Connection successfull");
})

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});
