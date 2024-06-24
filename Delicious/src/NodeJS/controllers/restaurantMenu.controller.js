import { useParams } from "react-router-dom";
import restaurantMenuModel from "../model/restaurantMenu.model.js";

// controller to create/add restaurant data 
export function create(req, res) {
    // get data from req body
    const { restaurantId, menu } = req.body;

    // crt a new data row in the table we have in model
    const newRestaurant = new restaurantMenuModel({ restaurantId, menu });

    // save the new row data and send it to the cloud
    newRestaurant.save()   //returns a promise as save is an async method
        .then(data => {
            if (!data) {
                res.status(400).json("Something went wrong");
            }
            res.json(data);
        })
        .catch(err => err.status(500).end({ message: err.message }))
}

//controller to fetch menu items of one restaurant
export function fetch(req, res) {
    // console.log("restaurant id ", req.params);
    // const restaurantId = req.params.resId;

    restaurantMenuModel.findOne({ restaurantId: req.params.resId })
        .then(data => {
            if (!data) {
                res.status(400).json({ messge: "No restaurant data found for given id" });
            }
            res.json(data);
        }).catch(err => res.status(500).json({ message: err.message }))
}