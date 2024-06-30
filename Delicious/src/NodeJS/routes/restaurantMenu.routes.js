import { create, fetch, fetchAll } from "../controllers/restaurantMenu.controller.js";

// add routes to the controllers
export function menuRoutes(app){
    app.post('/api/restaurantMenu', create);
    app.get('/api/restaurantMenu/:resId', fetch);
    app.get('/api/restaurantMenu', fetchAll);
}