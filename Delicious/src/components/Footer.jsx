// import './Footer.css'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

function Footer() {

    return (
        <>
            <footer className="flex-col justify-stretch items-center min-w-max w-full h-full bg-gray-900 text-center">
                <div className="grid grid-cols-5 gap-6 px-6 sm:gap-6 sm:px-6 md:px-4 md:gap-4 py-6 lg:py-8 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 min-w-max w-full justify-center">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Help & Support</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Partner with us</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Ride with us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">We Deliver to:</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Gurgaon</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Delhi</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Mumbai</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Pune</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Hyderabad</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Bangalore</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Android</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">iOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 bg-gray-300 flex items-center justify-evenly">
                    <span className="text-sm text-gray-800 sm:text-center">© 2024 <a href="/">Delicious™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 text-gray-900 rtl:space-x-reverse">
                        <a href="#" className="hover:text-gray-700">
                            <FaFacebookF />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <RiInstagramFill />
                            <span className="sr-only">Instagram community</span>
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <FaTwitter />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <FaLinkedinIn />
                            <span className="sr-only">LinkedIn account</span>
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <FaYoutube />
                            <span className="sr-only">Youtube account</span>
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer

