import { useParams } from "react-router-dom"; //hook for fetching dynamic routing params (resId in this case)
import { menuImageBaseUrl } from "../utils/baseData";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useEffect, useState } from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoRestaurant } from "react-icons/io5";
function RestaurantDetails() {
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);


    const params = useParams();
    // console.log("params: ", params);

    const dispatch = useDispatch();

    // handle add button to add items to cart
    const handleAddItem = (item) => {
        dispatch(addItem(item));    //calling the addItem action function to add item to cart.
    }

    // calling APi to fetch restaurnt details
    useEffect(() => {
        fetch(`http://localhost:5100/api/restaurant/${params.resId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("Restaurant details:", data);
                if (data) {
                    setRestaurantDetails(data);
                }
                else {
                    console.log("Restaurant details not available.");
                    setRestaurantDetails([]);
                }
            })
            .catch(err => console.log(err.message));
    }, [params.resId])



    // calling API to fetch menu items
    useEffect(() => {
        fetch(`http://localhost:5100/api/restaurantMenu/${params.resId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("Restaurant Menu items:", data.menu);
                if (data) {
                    setRestaurantMenuItems(data.menu);
                }
                else {
                    console.log("Restaurant menu not available.");
                    setRestaurantMenuItems([]);
                }
            })
            .catch(err => console.log(err.message));
    }, [params.resId]);


    return (
        
        <>
            <div className="min-w-fit">
                <div className="my-10 mx-8 sm:mx-12 md:mx-16 lg:mx-32 xl:mx-72 h-auto min-w-max max-w-4xl flex-col items-center justify-center bg-white">
                    <h1 className="font-extrabold text-2xl text-slate-900">{restaurantDetails.name}</h1>
                    <div className="border border-gray-300 drop-shadow-2xl rounded-lg flex-col my-10 px-4 h-auto min-w-full max-w-4xl justify-start bg-white">
                        <div className="flex items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#16a34a" className="size-5">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg tracking-tight font-bold text-slate-900">{restaurantDetails.rating}</span>
                            <span className="text-lg tracking-tight font-bold text-slate-900 mx-4">₹350 for 2</span>
                        </div>
                        <div className="flex items-center justify-start">
                            <span className="text-lg tracking-tight font-bold text-green-600 mr-1">{restaurantDetails.category}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#16a34a" className="size-4">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg tracking-tight font-normal underline text-orange-500 mx-2">{restaurantDetails.cuisine}</span>
                        </div>
                        <p className="flex items-center text-center my-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 mr-5">
                                <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                            </svg>
                            {restaurantDetails.location}</p>
                        <p className="flex items-center text-center my-2  text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-4">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                            {restaurantDetails.deliveryTime}</p>
                    </div>
                </div >
                <div className="relative font-bold flex items-center my-14 mx-4 md:mx-16 lg:mx-32 xl:mx-72 h-auto min-w-max max-w-4xl justify-center bg-white text-orange-500">
                    <IoRestaurant className="size-6" />Menu<IoRestaurantOutline className="size-6" />
                </div>

                {
                    restaurantMenuItems.map((item) =>
                        <div className="" key={item._id} >
                            <div className="flex my-10 mx-8 sm:mx-12 md:mx-16 lg:mx-32 xl:mx-72 h-36 max-w-4xl justify-between items-start bg-white">
                                <div className="px-2 min-w-min max-w-2xl sm:min-w-min justify-between">
                                    <p className="text-lg tracking-tight font-bold min-w-max text-slate-900 ">{item.name}</p>
                                    <p className="font-bold"><span>&#8377;</span>{item.price}</p>
                                    {(item.rating) ?
                                        <p className="flex items-center font-bold text-green-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#0f766e" color="#0f766e" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>{item.rating}</p>
                                        : <></>}
                                    <p className="mt-2 font-medium text-gray-500 overflow-hidden min-w-min max-w-fit line-clamp-2 md:line-clamp-3">{item.description}</p>
                                </div>
                                <a href="#" className="relative flex-col h-32 w-36 min-w-36 ml-4">
                                    <img className="absolute h-32 w-36 top-0 left-0 object-cover object-center rounded-xl" src={`${menuImageBaseUrl}${item.imageId}`} alt="Item image" />
                                    <button onClick={() => handleAddItem(item)} className="absolute top-28 left-4 w-28 items-center justify-center font-extrabold text-green-600 border border-gray-300 hover:text-white hover:bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-white rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-auto">ADD</button>
                                </a>
                            </div>
                            <hr className="border-gray-300 mx-4 md:mx-16 lg:mx-32 xl:mx-72 min-w-max max-w-4xl" />
                        </div>
                    )
                }
            </div>
        </>
    )



}

export default RestaurantDetails;