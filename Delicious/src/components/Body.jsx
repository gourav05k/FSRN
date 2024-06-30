import Restaurantcard from './RestaurantCard'
import TopRatedRestaurants from './TopRatedRestaurant'
import { useEffect, useState } from 'react'
import FastDelivery from './FastDelivery'
import { Link } from 'react-router-dom'
import myuserContext from '../utils/myuserContext'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../utils/searchSlice';

function Body() {

    console.log("Calling Body ***************************");
    const searchResults = useSelector(store => store.search.searchResults);
    const searchKeyword = useSelector(store => store.search.searchKeyword);
    const status = useSelector(store => store.search.status);
    const error = useSelector(store => store.search.err);


    const dispatch = useDispatch();

    // dispatch the fetchRestaurants action when the component mounts.
    useEffect(() => {
        console.log("Dispatching fetchRestaurants action");
        dispatch(fetchRestaurants());
    }, [dispatch]);


    console.log("searchKeyword : ", searchKeyword);
    console.log("searchResults : ", searchResults);
    console.log("status : ", status);
    console.log("error : ", error);

    const [filteredRestaurants, setFilteredRestaurants] = useState(searchResults);
    const [isTopRated, setIsTopRated] = useState(false);
    const [isFastDelivery, setIsFastDelivery] = useState(false);

    function FilterTopRestaurants() {
        setIsTopRated(true);
    }

    function FastDeliveringRestaurants() {
        setIsFastDelivery(true);
    }


    /**
     * if search text updated, find restourants based on updated search
     * check if top rated flag was true-> apply top rated as well on the prev search if true
     * else show updated results based on new search text
     */

    useEffect(() => {
        let filtered = searchResults;
        if (isTopRated) {
            filtered = filtered.filter(res => parseFloat(res.rating) > 4.1);
        }
        if (isFastDelivery) {
            filtered = filtered.filter(res => Number(res.deliveryTime.slice(0, 2)) < 30);
        }
        setFilteredRestaurants(filtered);
    }, [searchResults, isTopRated, isFastDelivery])


    return (
        <>
            {/* filters */}
            <div className="flex justify-start gap-16 space-x-2 px-4 py-2 bg-white-100">
                <button className="flex items-center space-x-1 px-6 py-1 bg-white rounded-full shadow-md focus:bg-gray-200 focus:ring-2 focus:ring-orange-300">
                    <span>Filter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6h4M6 10h12M8 14h8M5 18h14" />
                    </svg>
                </button>
                <div className='flex justify-center space-x-2 px-4 py-2 gap-6 bg-white-100'>
                    <TopRatedRestaurants filterTopRestaurants={FilterTopRestaurants} />
                    <FastDelivery fastRestaurants={FastDeliveringRestaurants} />
                </div>
            </div>


            {/* restaurant cards */}
            <div className="bg-white flex justify-center">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Restaurants with online food delivery in Pune</h2>
                    <div className='mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"'>
                        {filteredRestaurants.map((res) =>
                            < Link to={"/restaurant/" + res._id} key={res._id}>
                                <div>
                                    <Restaurantcard key={res._id} restaurant={res} />
                                </div>
                            </Link>
                        )}
                    </div>
                </div >
            </div>
        </>
    )
}

export default Body;