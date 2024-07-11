import { create, deleteAll, deleteOne, fetch, fetchOne, updateOne } from "../controllers/restaurants.controller.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

// add routes to the controllers
export function routes(app){
    app.post('/api/v1/restaurants', verifyToken, isAdmin, create);
    app.get('/api/v1/restaurants', fetch);
    app.get('/api/v1/restaurant/:id', fetchOne);
    app.put('/api/v1/restaurant/:id', verifyToken, isAdmin, updateOne);
    app.delete('/api/v1/restaurants', verifyToken, isAdmin, deleteAll);
    app.delete('/api/v1/restaurant/:id', verifyToken, isAdmin, deleteOne);
}