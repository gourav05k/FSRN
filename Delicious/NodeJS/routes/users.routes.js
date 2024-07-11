import { login, register } from "../controllers/users.controller.js";
// import verifyToken from "../middleware/verifyToken.js";

export function userRoutes(app){
    app.post("/api/v1/register", register);
    app.post("/api/v1/login", login);
}