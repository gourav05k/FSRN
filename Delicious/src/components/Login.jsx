import { useState } from "react";
import Body from "./Body";
import logo from '../img/logo1.png'
export default function Login() {

    const [isSignUp, setIsSignUp] = useState(true);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log("name: ", fullName);
    // console.log("email: ", email);
    // console.log("password: ", password);

    // Call the APIs with details submitted in form
    function handleSubmit() {
        console.log("form submitted");
        !isSignUp ? register() : login();
    }

    function register() {
        console.log("registered");
        // call API using fetch. check for the url defined in user route
        fetch("http://localhost:5100/api/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    password: password
                })
            }).then(response => response.json())    //this .json() also returns promise. so we need to resolve it
            .then(data => {
                console.log(data)
                setIsSignUp(true);
            })
            .catch(err => err.message);
    }

    // fetch the response from the login API and use the token stored in session storage.
    function login() {
        console.log("login started");
        fetch("http://localhost:5100/api/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(response => response.json())    //this .json() also returns promise. so we need to resolve it
            .then(data => {
                console.log("------------ data-----------", data);
                sessionStorage.setItem("accessToken", data.accessToken);        //get the accessToken from browser session storage. use the same variable name.
            })
    }

    return (

        <section className="bg-white">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold">
                    <img className="w-12 h-12 mr-2" src={logo} alt="logo" />
                    Welcome to Delicious !!
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#!" onSubmit={handleSubmit}>
                            {/* <!-- name input --> */}
                            {!isSignUp &&
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 ">Your Name</label>
                                    <input type="email" name="email" id="email" className=" border border-gray-300 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 bg-gray-100 dar placeholder-gray-400" placeholder="Full Name" required onChange={e => setFullName(e.target.value)} />
                                </div>
                            }
                            {/* email input */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 ">Your email</label>
                                <input type="email" name="email" id="email" className=" border border-gray-300 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 bg-gray-100 dar placeholder-gray-400" placeholder="name@gmail.com" required onChange={e => setEmail(e.target.value)} />
                            </div>
                            {/* password input */}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 bg-gray-100 placeholder-gray-400" required onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border-1 accent-orange-600" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#!" className="text-sm font-medium hover:underline text-orange-500">Forgot password?</a>
                            </div>
                            {/* login/submit */}
                            <button type="submit" className="w-full text-white bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                {!isSignUp ? "Register" : "Login"}
                            </button>

                            {isSignUp &&
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account yet? <a href="#" className="font-medium text-orange-500 hover:underline" onClick={() => setIsSignUp(false)}>Sign up</a>
                                </p>
                            }
                            {!isSignUp &&
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-medium text-orange-500 hover:underline" onClick={() => setIsSignUp(true)}>Login here!</a>
                                </p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}