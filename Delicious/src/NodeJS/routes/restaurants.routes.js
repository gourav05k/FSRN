import { create, deleteAll, deleteOne, fetch, fetchOne, updateOne } from "../controllers/restaurants.controller.js";
import verifyToken from "../middleware/verifyToken.js";

// add routes to the controllers
export function routes(app){
    app.post('/api/restaurants', create);
    app.get('/api/restaurants', fetch);
    app.get('/api/restaurant/:id', fetchOne);
    app.put('/api/restaurant/:id', updateOne);
    app.delete('/api/restaurants', deleteAll);
    app.delete('/api/restaurant/:id', deleteOne);

}