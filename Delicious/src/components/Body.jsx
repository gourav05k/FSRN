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

function Body() {
    // console.log("again started")
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurant_details);
    const [isTopRated, setIsTopRated] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [isFastDelivery, setIsFastDelivery] = useState(false);


    // console.log("updated filtered restaurants : ", filteredRestaurants);

    function SearchRestaurants(searchText) {
        // console.log("inside search 17");
        setSearchText(searchText);
    }

    function FilterTopRestaurants() {
        // console.log('filter top before');
        setIsTopRated(true);
        // console.log('filter top');
    }

    function FastDeliveringRestaurants() {
        // console.log("inside fastRestaurants");
        setIsFastDelivery(true);
    }

    useEffect(() => {
        console.log("fetch restaurants useEffect called");
        fetch('http://localhost:5100/api/restaurants', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${sessionStorage.getItem("accessToken")}`
            }
        }).then(response => response.json())
        .then(data => console.log("Restaurant data:", data));
    }, [])
    

    /**
     * if search text updated, find restourants based on updated search
     * check if top rated flag was true-> apply top rated as well on the prev search if true
     * else show updated results based on new search text
     */
    useEffect(() => {
        console.log("hi effect");
        let searchRestaurants = restaurant_details.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()));
        if (isTopRated) {
            // console.log("yes top");
            searchRestaurants = searchRestaurants.filter(res => parseFloat(res.rating) > 4.1);
        }
        if (isFastDelivery) {
            searchRestaurants = searchRestaurants.filter(res => Number(res.deliveryTime.slice(0, 2)) < 30);
        }
        setFilteredRestaurants(searchRestaurants);
        // console.log("filtered Restaurants: ", filteredRestaurants);
    }, [searchText, isTopRated, isFastDelivery])

    // console.log("completed")

    // const { userName, setUserName } = useContext(myuserContext);

    return (
        <>
            <div className='flex gap-2 justify-start m-4 ml-24'>
                <Search SearchRestaurants={SearchRestaurants} />
                <TopRatedRestaurants filterTopRestaurants={FilterTopRestaurants} />
                <FastDelivery fastRestaurants={FastDeliveringRestaurants} />
                {/* <span><input type="text" value={userName} onChange={e => setUserName(e.target.value)} /></span> */}
            </div>

            <div className='grid grid-cols-4 justify-items-center'>
                {filteredRestaurants.map((res) =>
                    <Link to={"/restaurant/" + res.id} key={res.id}>
                        <Restaurantcard key={res.id} restaurant={res} />
                    </Link>
                    // above link is used to add link to each card to its restaurnt details page /restaurant/:res.id
                )}
            </div>
        </>
    )
}

export default Body