import express from "express";
import mongoose from "mongoose";
import {routes} from './routes/restaurants.routes.js'
import {userRoutes} from "./routes/users.routes.js";
import verifyToken from "./middleware/verifyToken.js";
import cors from "cors";
import { menuRoutes } from "./routes/restaurantMenu.routes.js";


//create application server
const app = express();

app.use(cors()); // middleware to enable cross origin
// built in middleware for JSON Parsing
app.use(express.json());

app.listen("5100", () => {
    console.log("server is running on port 5100");
});

// pass app to the routes to add routes

// app level middleware
// app.use(authUser);

routes(app);
userRoutes(app);
menuRoutes(app);

// 1) create cluster
// 2) connect server to DB
// mongoose.connect("mongodb+srv://gourav:LkvFjopvEJzY2tzq@cluster0.4lub0yn.mongodb.net/")
mongoose.connect("mongodb+srv://gourav:LkvFjopvEJzY2tzq@cluster0.4lub0yn.mongodb.net/")


const db = mongoose.connection;

// check connection to db is successful or not
db.on("error", ()=>{
    console.log("Connection failed");
})

db.on("open", ()=> {
    console.log("Connection successfull");
})

// CRUD Operations
// Create
// Read
// Update
// Delete

// HTTP Methods
// POST
// GET
// PUT
// DELETE

const users = [
    {   
        id:1,
        firstName: "Gourav",
        age: 26
    },
    {
        id:2,
        firstName: "Ankit",
        age: 45
    },
    {
        id:3,
        firstName: "John",
        age: 12
    },
    {
        id:4,
        firstName: "Alice",
        age: 23
    }
];
// route level middleware --> passed in route.
function logUSerRequest(req, res, next){
    console.log("user has initiated request.");
    next();
}
// app level middleware--> called in app
function authUser(req, res, next){
    console.log("Auth user middleware");
    next();
}


app.get("/", (req, res) => {
    res.send("Learning NodeJS");
})

// route level middleware (logUSerRequest)--> passed in route.
// app.get("/users", logUSerRequest, (req, res) => {
app.get("/users", (req, res) => {
    res.send(users);
})

app.post("/users", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const id = req.body.id;

    const user = {
        id:id,
        firstName: name,
        age: age
    }

    users.push(user);
    res.send(users);
})

app.put("/user/:id", (req, res) => {

        const id = req.params.id;

        const user = users.find(user => user.id==id); 
        // return undefined if not found
        console.log("user: ", user);
        if(!user){
            res.status(404).send({message:"Invalid user id"})
        }
        const payloadKeys = Object.keys(req.body);
        console.log("payload keys: ", payloadKeys);
        
        payloadKeys.forEach(key => {
            console.log(".key: ",req.body.key);
            if(!user[key]){
                res.status(404).json({messsge: "Invalid properties of the user passed in the payload"});
            }else{
                user[key] = req.body[key];
            }
        })
        //to send the response in json format
        res.json(users);

})

app.delete("/user/:id", (req, res)=> {
    const id = req.params.id;

    const user = users.find(user => user.id==id);
    console.log("User deleted:", user);
    if(!user){
        res.end("invalid user id or url");
    }else{
        const index = users.findIndex(user => user.id == id);
        // delete the one occurance of above index element
        users.splice(index);
    }
    res.send(users);
})