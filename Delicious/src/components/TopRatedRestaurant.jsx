function TopRatedRestaurants(props) {

    function FilteredRestaurants() {
        console.log("top clicked");
        props.filterTopRestaurants();
    }

    return (
        <button onClick={FilteredRestaurants} className="px-6 py-1 bg-white rounded-full border border-gray-200 focus:bg-gray-100 focus:ring-1 focus:ring-gray-400">Ratings 4.0+</button>
    )
}

export default TopRatedRestaurants;