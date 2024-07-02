import { useState } from "react";
import Body from "./Body";
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
                console.log(data);
                sessionStorage.setItem("accessToken", data.accessToken);        //get the accessToken from browser session storage. use the same variable name.
            })
    }

    return (
        <section className="h-screen">
            <div className="h-full">
                {/* <!-- Left column container with background--> */}
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>

                    {/* <!-- Right column container --> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <form onSubmit={handleSubmit}>

                            {/* <!-- Name input --> */}
                            {!isSignUp &&
                                <div>
                                    <input
                                        type="text"
                                        size="lg"
                                        className="mb-6 placeholder:text-slate-400 block bg-white w-56 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                        placeholder="Full Name"
                                        required
                                        onChange={e => setFullName(e.target.value)}>
                                    </input>
                                </div>
                            }

                            {/* <!-- Email input --> */}
                            <div>
                                <input
                                    type="email"
                                    size="lg"
                                    className="mb-6 placeholder:text-slate-400 block bg-white w-56 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email address"
                                    required
                                    onChange={e => setEmail(e.target.value)}>
                                </input>
                            </div>

                            {/* <!--Password input--> */}
                            <div>
                                <input
                                    type="password"
                                    className="mb-6 placeholder:text-slate-400 block bg-white w-56 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password"
                                    required
                                    size="lg"
                                    onChange={e => setPassword(e.target.value)}>
                                </input>
                            </div>

                            <div className="mb-6 flex items-center justify-between">
                                {/* <!-- Remember me checkbox --> */}
                                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        value=""
                                        id="exampleCheck2"
                                    />
                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="exampleCheck2"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                {/* <!--Forgot password link--> */}
                                {/* <a href="#!" >Forgot password?</a> */}
                            </div>

                            {/* <!-- Login button --> */}
                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block rounded bg-blue-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    onClick={<Body />}>
                                    {!isSignUp ? "Register" : "Login"}
                                </button>

                                {/* <!-- Register link --> */}
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Don't have an account?{" "}
                                    <a
                                        href="#!"
                                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 text-blue-600"
                                        onClick={() => setIsSignUp(false)}
                                    >
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}