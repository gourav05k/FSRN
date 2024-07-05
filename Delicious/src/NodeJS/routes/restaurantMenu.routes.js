import { create, fetch, fetchAll, updateOne } from "../controllers/restaurantMenu.controller.js";

// add routes to the controllers
export function menuRoutes(app){
    app.post('/api/restaurantMenu', create);
    app.get('/api/restaurantMenu/:resId', fetch);
    app.put('/api/restaurantMenu/:resId', updateOne);
    app.get('/api/restaurantMenu', fetchAll);
}