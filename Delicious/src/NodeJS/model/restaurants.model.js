// To create schema of DB and covert this schema to model

import mongoose from "mongoose";

// we won't add id as by default, Mongoose adds an _id property to your schemas.
const restaurantSchema = new mongoose.Schema({
    imageId: String,
    name : String,
    rating: String,
    deliveryTime: String,
    cuisine: String,
    location: String,
    offer: String
})

// convert schema to model. restaurants table will follow restaurantSchema
const restaurantModel = mongoose.model("restaurants", restaurantSchema);

export default restaurantModel;