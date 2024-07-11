import { create, fetch, fetchAll, updateOne } from "../controllers/restaurantMenu.controller.js";
import isAdmin from "../middleware/isAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

// add routes to the controllers
export function menuRoutes(app){
    app.post('/api/v1/restaurantMenu', verifyToken, isAdmin, create);
    app.get('/api/v1/restaurantMenu/:resId', fetch);
    app.put('/api/v1/restaurantMenu/:resId', verifyToken, isAdmin, updateOne);
    app.get('/api/v1/restaurantMenu', fetchAll);
}