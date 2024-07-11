import Restaurantcard from './RestaurantCard'
import TopRatedRestaurants from './TopRatedRestaurant'
import { useEffect, useState } from 'react'
import FastDelivery from './FastDelivery'
import { Link } from 'react-router-dom'
// import myuserContext from '../utils/myuserContext'
// import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../utils/searchSlice';
import IsVeg from './IsVeg'

function Body() {

    console.log("Calling Body ***************************");

    const dispatch = useDispatch();

    // dispatch the fetchRestaurants action when the component mounts.
    useEffect(() => {
        console.log("Dispatching fetchRestaurants action in Body *************");
        dispatch(fetchRestaurants());
    }, [dispatch]);

    const searchResults = useSelector(store => store.search.searchResults);
    const status = useSelector(store => store.search.status);
    console.log("search Results from store: ", searchResults);
    console.log("status of search Results from store: ", status);

    const [filteredRestaurants, setFilteredRestaurants] = useState(searchResults);
    const [isTopRated, setIsTopRated] = useState(false);
    const [isFastDelivery, setIsFastDelivery] = useState(false);
    const [isVeg, setIsVeg] = useState(false);

    function FilterTopRestaurants() {
        setIsTopRated(!isTopRated);
    }

    function FastDeliveringRestaurants() {
        setIsFastDelivery(!isFastDelivery);
    }

    function FilterVegRestaurants() {
        setIsVeg(!isVeg);
    }

    const totalFiltersEnabled = [isTopRated, isFastDelivery, isVeg].filter(res => res == true);

    // handle search results whenever they are updated. check if filters are enabled/disabled
    useEffect(() => {
        let filtered = searchResults;
        if (isTopRated) {
            filtered = filtered.filter(res => parseFloat(res.rating) > 4.0);
        }
        if (isFastDelivery) {
            filtered = filtered.filter(res => Number(res.deliveryTime.slice(0, 2)) < 30);
        }
        if (isVeg) {
            filtered = filtered.filter(res => res.category === "Veg");
        }
        setFilteredRestaurants(filtered);
    }, [searchResults, isTopRated, isFastDelivery, isVeg])


    return (

        <div className='overflow-auto '>
            <div className=" mx-auto px-32 min-w-max sm:min-w-min sm:px-16 sm:py-1 sm:max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:px-20 mb-36 mt-12">
                {/* filters */}
                <div className='flex justify-between min-w-max w-full mb-4'>
                    <button className=" flex justify-center items-center px-2 mr-6 bg-white rounded-full border border-gray-200 focus:bg-gray-100 focus:ring-1 focus:ring-gray-400">
                        <span className="px-2 mx-2">
                            {totalFiltersEnabled.length > 0 ? <span>{totalFiltersEnabled.length} Filter</span> : <span>Filter</span>}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                    <div className='flex justify-end items-center gap-6 bg-white-100'>
                        <TopRatedRestaurants filterTopRestaurants={FilterTopRestaurants} />
                        <FastDelivery fastRestaurants={FastDeliveringRestaurants} />
                        <IsVeg filterVegRestaurants={FilterVegRestaurants} />
                    </div>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">Restaurants with online food delivery in Pune</h2>
                {/* cards */}
                {filteredRestaurants.length === 0
                    ?
                    (
                        status === 'succeeded' ?
                            <p className="text-xl text-center text-gray-500 my-24">No restaurants match your search criteria.</p>
                            :
                            < p className="text-2xl text-center text-gray-500 my-56 flex justify-center items-center gap-3">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                Loading Restaurants...
                            </p>
                    )
                    : (
                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {filteredRestaurants.map((res) =>
                                <Link to={"/restaurant/" + res._id} key={res._id}>
                                    <Restaurantcard key={res._id} restaurant={res} />
                                </Link>
                            )}
                        </div>
                    )}

            </div>
        </div >

    )
}

export default Body;


