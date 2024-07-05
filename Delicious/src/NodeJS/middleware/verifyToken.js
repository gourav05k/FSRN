import jwt from "jsonwebtoken"
import userModel from "../model/users.model.js";

function verifyToken(req, res, next) {
    // console.log("in verify token");

    console.log("token val:", req.headers['authorization']);
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"
    ) {
        const token = req.headers.authorization.split(" ")[1];
        const secretKey = "secretKey";
        jwt.verify(token, secretKey, function (err, verifiedTokenPayload) {
            if (err) {
                res.status(401).json({ message: err.message || "Invalid token" });
            }
            // console.log("verified Token payload: ", verifiedTokenPayload);    //this will be payload containing id using which token was generated along with issue time and expire time.
            // find the user with the id from the token
            userModel.findById(verifiedTokenPayload.id)
                .then(user => {
                    // console.log("user: ", user);
                    // to add the user details to request (if required).
                    req.user = user;
                    next();
                }).catch(err=> {
                    res.status(500).json({message: err.message || "Internal Server Error"});
                })
        });
    }
    else {
        console.log("no token present");
        res.status(500).json({ message: "no token present"});   
    }

}

export default verifyToken;