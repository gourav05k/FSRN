// create controllers to create, read, update, delete data and connect these with routes

import restaurantModel from '../model/restaurants.model.js'

// controller to create/add restaurant data 
export function create(req, res) {
    // get data from req body
    const { imageId, name, rating, deliveryTime, cuisine, location, offer } = req.body;

    // crt a new data row in the table we have in model
    const newRestaurant = new restaurantModel({ imageId, name, rating, deliveryTime, cuisine, location, offer })

    // save the new row data and send it to the cloud
    newRestaurant.save()   //returns a promise as save is an async method
        .then(data => {
            if (!data) {
                res.status(400).json("Something went wrong");
            }
            res.json(data);
        })
        .catch(err => err.status(500).json({ message: err.message }))
}

//controller to fetch all retaurants details
export function fetch(req, res) {

    restaurantModel.find().
        then(data => {
            if (!data) {
                res.status(400).json({ messge: "No restaurant data found" });
            }
            res.json(data);
        }).catch(err => res.status(500).json({ message: err.message }))
}

// controller to fetch one restaurant data
export function fetchOne(req, res) {
    const _id = req.params.id;
    
    restaurantModel.findById(_id).
        then(data => {
            if (!data) {
                res.status(400).json({ messge: "No restaurant data found with given _id" });
            }
            res.json(data);
        }).catch(err => res.status(500).json({ message: err.message }))
    }
    
// controller to update one restaurant data
export function updateOne(req,res){
    const updatedFields = req.body
    const _id = req.params.id;
    restaurantModel.findByIdAndUpdate(_id, updatedFields)
    .then(data => {
        if(!data){
            res.status(400).json({message: "Something went wrong"})
        }
        res.json(data);
    }).catch(err => res.status(500).json({message: err.message}));
}

// controller to delete all restaurant data
export function deleteAll(req, res){
    restaurantModel.deleteMany()
    .then(data => {
        if(!data){
            res.json({message: "No data"})
        }
        res.staus(400).json({message:"something went wrong"});
    }).catch(err => res.status(500).json({message: err.message}));
}

// controller to delete one restaurant data
export function deleteOne(req, res) {
    const _id = req.params.id;

    restaurantModel.findByIdAndDelete(_id).then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}));

}


