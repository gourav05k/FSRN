function IsVeg(props) {

    function FilterVegRestaurants(){
        console.log("filtering only veg restaurants");
        props.filterVegRestaurants();
    }

    return (
        <button onClick={FilterVegRestaurants} className="px-6 py-1 bg-white rounded-full border border-gray-200 focus:bg-gray-100 focus:ring-1 focus:ring-gray-400">Only Veg</button>
    )
}

export default IsVeg;