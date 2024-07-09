// To create schema of DB and covert this schema to model

import mongoose from "mongoose";

// we won't add id as by default, Mongoose adds an _id property to your schemas.
const restaurantMenuSchema = new mongoose.Schema({
    restaurantId: mongoose.Types.ObjectId,
    menu: [{
        imageId: String,
        name: String,
        rating: String,
        price: Number,
        description: String
    }]
})

// convert schema to model. restaurants table will follow restaurantSchema
const restaurantMenuModel = mongoose.model("restaurantMenu", restaurantMenuSchema);

export default restaurantMenuModel;