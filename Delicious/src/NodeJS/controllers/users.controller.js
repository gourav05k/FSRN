import jwt from "jsonwebtoken";
import userModel from "../model/users.model.js";
import bcrypt, { hashSync } from "bcrypt";
// register new user
export function register(req, res) {

    const { fullName, email, password } = req.body;
    const newUser = userModel({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10)
    })
    // find if user already exists. if not, add the new user to the datbase.
    userModel.findOne({ email })
        .then((data) => {
            if (data) {
                res.status(400).json({ message: "User already exists" });
            } else {
                newUser.save()
                    .then((data) => {
                        if (!data) {
                            res.status(400).send("Something went wrong");
                        }
                        res.status(200).json(data);
                    }).catch(err => {
                        res.status(500).json({ messsage: err.message })
                    })
            }

        }).catch(err => {
            res.status(500).json({ messsage: err.message })
        })
}

export function login(req, res) {

    const { email, password } = req.body;

    userModel.findOne({ email }).then(userData => {
        if (!userData) {
            return res.status(401).send({ message: "Not a registered user." });
        }
        // check if pasword is correct. compare plain text password with hash pasword from the DB.
        const isValidPassword = bcrypt.compareSync(password, userData.password);

        if (!isValidPassword) {
            return res.status(400).send({ message: "Invalid email or password" });
        }
        // using user id to generate unique token for each user.
        let token = jwt.sign({ id: userData._id }, 'secretKey', { expiresIn: '1h' });

        return res.status(200).json({
            user: {
                email: userData.email,
                password: userData.password,
            },
            accessToken: token
        });
    }).catch(err => {
       res.status(500).send({ message: err.message});
    //    return res.status(500).end({ message: err.message || "Something went wrong" });
    })
}