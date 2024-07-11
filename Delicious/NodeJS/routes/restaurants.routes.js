import { create, deleteAll, deleteOne, fetch, fetchOne, updateOne } from "../controllers/restaurants.controller.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

// add routes to the controllers
export function routes(app){
    app.post('/api/restaurants', verifyToken, isAdmin, create);
    app.get('/api/restaurants', fetch);
    app.get('/api/restaurant/:id', fetchOne);
    app.put('/api/restaurant/:id', verifyToken, isAdmin, updateOne);
    app.delete('/api/restaurants', verifyToken, isAdmin, deleteAll);
    app.delete('/api/restaurant/:id', verifyToken, isAdmin, deleteOne);
}