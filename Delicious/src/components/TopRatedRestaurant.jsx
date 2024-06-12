function TopRatedRestaurants(props) {

    function FilteredRestaurants(){
        console.log("top clicked");
        props.filterTopRestaurants();
    }


    return (
        <div className="topratedrestaurant">
            <button onClick={FilteredRestaurants}>Top Rated Restaurants</button>
        </div>
    )
}

export default TopRatedRestaurants;