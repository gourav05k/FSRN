import Restaurantcard from './RestaurantCard'
import TopRatedRestaurants from './TopRatedRestaurant'
import { useEffect, useState } from 'react'
import FastDelivery from './FastDelivery'
import { Link } from 'react-router-dom'
import myuserContext from '../utils/myuserContext'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../utils/searchSlice';
import IsVeg from './IsVeg'

function Body() {

    // console.log("Calling Body ***************************");
    const searchResults = useSelector(store => store.search.searchResults);
    const searchKeyword = useSelector(store => store.search.searchKeyword);
    const status = useSelector(store => store.search.status);
    const error = useSelector(store => store.search.err);


    const dispatch = useDispatch();

    // dispatch the fetchRestaurants action when the component mounts.
    useEffect(() => {
        console.log("Dispatching fetchRestaurants action in Body *************");
        dispatch(fetchRestaurants());
    }, [dispatch]);

    const [filteredRestaurants, setFilteredRestaurants] = useState(searchResults);
    const [isTopRated, setIsTopRated] = useState(false);
    const [isFastDelivery, setIsFastDelivery] = useState(false);
    const [isVeg, setIsVeg] = useState(false);

    function FilterTopRestaurants() {
        setIsTopRated(true);
    }

    function FastDeliveringRestaurants() {
        setIsFastDelivery(true);
    }

    function FilterVegRestaurants(){
        setIsVeg(true);
    }


    /**
     * if search text updated, find restourants based on updated search
     * check if top rated flag was true-> apply top rated as well on the prev search if true
     * else show updated results based on new search text
     */

    useEffect(() => {
        let filtered = searchResults;
        if (isTopRated) {
            filtered = filtered.filter(res => parseFloat(res.rating) > 4.0);
        }
        if (isFastDelivery) {
            filtered = filtered.filter(res => Number(res.deliveryTime.slice(0, 2)) < 30);
        }
        if(isVeg){
            filtered = filtered.filter(res => res.category === "Veg");
        }
        setFilteredRestaurants(filtered);
    }, [searchResults, isTopRated, isFastDelivery, isVeg])


    return (
        <>
            <div className='overflow-auto'>

                {/* filters */}
                <div className="flex justify-start gap-16 space-x-2 mx-44 my-4 bg-white-100">
                    <button className="flex items-center space-x-1 mx-6 bg-white rounded-full shadow-md focus:bg-gray-200 focus:ring-2 focus:ring-black-500">
                        <span className="px-2 mx-2">Filter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                    <div className='flex justify-center space-x-2 px-4 gap-6 bg-white-100'>
                        <TopRatedRestaurants filterTopRestaurants={FilterTopRestaurants} />
                        <FastDelivery fastRestaurants={FastDeliveringRestaurants} />
                        <IsVeg filterVegRestaurants = {FilterVegRestaurants} />
                    </div>
                </div>

                <div className="bg-white mx-auto px-32 sm:px-16 sm:py-1 sm:max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:px-20 mb-36 mt-12">
                    {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">Restaurants with online food delivery in Pune</h2>
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
                    {/* </div > */}
                </div>
            </div>
        </>
    )
}

export default Body;




{/* restaurant cards */ }


