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
        <>
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
                    {filteredRestaurants.length === 0 ? (<p className="text-xl text-center text-gray-500 my-24">No restaurants match your search criteria.</p>
                    ) : (
                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {filteredRestaurants.map((res) =>
                                <Link to={"/restaurant/" + res._id} key={res._id}>
                                    <Restaurantcard key={res._id} restaurant={res} />
                                </Link>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Body;


