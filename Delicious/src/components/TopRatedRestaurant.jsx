function TopRatedRestaurants(props) {

    function FilteredRestaurants() {
        console.log("top clicked");
        props.filterTopRestaurants();
    }

    return (
        <button onClick={FilteredRestaurants} className="px-6 py-1 bg-white rounded-full shadow-md focus:bg-gray-200 focus:ring-2 focus:ring-orange-300">Ratings 4.0+</button>
    )
}

export default TopRatedRestaurants;