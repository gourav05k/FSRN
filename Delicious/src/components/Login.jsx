import { useState } from "react";
import Body from "./Body";
import logo from '../img/logo1.png'

export default function Login() {

    // console.log("Login component rendered");
    const [isSignUp, setIsSignUp] = useState(true);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Call the APIs with details submitted in form
    function handleSubmit() {
        event.preventDefault();     // Prevent the default form submission
        !isSignUp ? register() : login();
        console.log("form submitted");
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
                if (data._id) { // the API responds with a id property
                    console.log("Registered successfully");
                    setIsSignUp(true);
                    setFullName("");
                    setEmail("");
                    setPassword("");
                    setErrorMessage("Registered successfully");
                } else {
                    console.error("Registration failed: ", data.message);
                    setErrorMessage(data.message);
                }
            })
            .catch(err => setErrorMessage("Error: " + err.message));
    }

    // fetch the response from the login API and use the token stored in session storage.
    function login() {
        console.log("login process started");
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
                if (data.accessToken) { // the API responds with an accessToken
                    sessionStorage.setItem("accessToken", data.accessToken); //set the accessToken in browser session storage. use the same variable name.
                    console.log("Login successful");
                    setErrorMessage("");
                    window.location.href = "/"; // Redirect to the main page
                } else {
                    console.log("Login failed");
                    setErrorMessage(data.message);
                }
            }).catch(err => {
                console.log("error: ", err.message);
                setErrorMessage("Error: " + err.message)

            });
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
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            {/* name input */}
                            {!isSignUp &&
                                <div>
                                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-600 ">Your Name</label>
                                    <input type="text" id="fullName" value={fullName} className=" border border-gray-300 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 bg-gray-100 dar placeholder-gray-400" placeholder="Full Name" required onChange={e => setFullName(e.target.value)} />
                                </div>
                            }
                            {/* email input */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 ">Your email</label>
                                <input type="email" id="email" value={email} className=" border border-gray-300 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 bg-gray-100 dar placeholder-gray-400" placeholder="name@gmail.com" required onChange={e => setEmail(e.target.value)} />
                            </div>
                            {/* password input */}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                                <input type="password" id="password" value={password} placeholder="••••••••" className="border border-gray-300 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 bg-gray-100 placeholder-gray-400" required onChange={e => setPassword(e.target.value)} />
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

                            {errorMessage && <p className="text-red-600 text-center font-bold">{errorMessage}</p>}

                            {isSignUp &&
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account yet? <a href="#" className="font-medium text-orange-500 hover:underline" onClick={() => {
                                        setIsSignUp(false);
                                        setFullName("");
                                        setEmail("");
                                        setPassword("");
                                    }}>Sign up</a>
                                </p>
                            }
                            {!isSignUp &&
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-medium text-orange-500 hover:underline" onClick={() => {
                                        setIsSignUp(true)
                                        setFullName("");
                                        setEmail("");
                                        setPassword("");
                                    }}>Login here!</a>
                                </p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}