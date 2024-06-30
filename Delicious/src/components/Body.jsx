// import './Body.css'
import Restaurantcard from './RestaurantCard'
import { restaurant_details } from '../utils/mockData'
import TopRatedRestaurants from './TopRatedRestaurant'
import Search from './Search'
import { useEffect, useState } from 'react'
import FastDelivery from './FastDelivery'
import { Link } from 'react-router-dom'
import myuserContext from '../utils/myuserContext'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchRestaurants } from '../utils/searchSlice';

function Body() {
    
    const searchResults = useSelector(store => store.search.searchResults);
    const searchKeyword = useSelector(store => store.search.searchKeyword);
    console.log("searchResults from store in body", searchResults);
    console.log("searchKeyword from store in body: ", searchKeyword);

    const [filteredRestaurants, setFilteredRestaurants] = useState(searchResults);
    const [isTopRated, setIsTopRated] = useState(false);
    const [isFastDelivery, setIsFastDelivery] = useState(false);

    function FilterTopRestaurants() {
        setIsTopRated(true);
    }

    function FastDeliveringRestaurants() {
        setIsFastDelivery(true);
    }

    // API call to fetch data.
    // useEffect(() => {
    //     // console.log("fetch restaurants useEffect called");
    //     fetch('http://localhost:5100/api/restaurants', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `JWT ${sessionStorage.getItem("accessToken")}`
    //         }
    //     }).then(response => response.json())
    //         .then(data => {
    //             // console.log("Restaurant data:", data);
    //             // setFilteredRestaurants(data);
    //         }).catch(err => console.log(err.message));
    // }, [])


    /**
     * if search text updated, find restourants based on updated search
     * check if top rated flag was true-> apply top rated as well on the prev search if true
     * else show updated results based on new search text
     */
    
    useEffect(() => {
        let searchRestaurants = searchResults;
        if (isTopRated) {
            // console.log("yes top");
            searchRestaurants = searchRestaurants.filter(res => parseFloat(res.rating) > 4.1);
        }
        if (isFastDelivery) {
            searchRestaurants = searchRestaurants.filter(res => Number(res.deliveryTime.slice(0, 2)) < 30);
        }
        setFilteredRestaurants(searchRestaurants);
        // console.log("filtered Restaurants: ", filteredRestaurants);
    }, [searchResults, isTopRated, isFastDelivery])

    // console.log("completed")

    // const { userName, setUserName } = useContext(myuserContext);

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
                    {/* <span><input type="text" value={userName} onChange={e => setUserName(e.target.value)} /></span> */}
                    {/* <Search SearchRestaurants={SearchRestaurants} /> */}
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
                                    {/* {console.log("res in line 88", res)} */}
                                    <Restaurantcard key={res._id} restaurant={res} />
                                </div>
                            </Link>
                            // above link is used to add link to each card to its restaurnt details page /restaurant/:res.id
                        )}
                    </div>
                </div >
            </div>
        </>
    )
}

export default Body