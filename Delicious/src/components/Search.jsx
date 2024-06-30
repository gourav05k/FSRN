// import './Search.css'
import { restaurant_details } from '../utils/mockData';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRestaurants } from '../utils/searchSlice';

function Search(props) {

    const [searchText, updateSearchText] = useState("");

    console.log("search rendered ************");
    console.log("searchText var:", searchText);
    const dispatch = useDispatch();

    const filterRestaurants = () => {
        console.log("inside filter function--------");
        console.log("search text line 20: ", searchText);
        dispatch(searchRestaurants(searchText));
    }

    // useEffect(() => {
    //     console.log("calling useeffect ")
    //     // if(searchText==""){
    //     filterRestaurants();
    //     // }
    // }, [searchText])

return (
    <>
        <div className="flex gap-2 px-6 items-center">
            <input
                className="border border-solid border-black"
                type="text" name="searchBar" id="searchBar"
                onChange={(e) => {
                    updateSearchText(e.target.value);
                    // filterRestaurants();
                }
                } />
            <button className=' bg-white' onClick={filterRestaurants}>Search</button>
        </div>
    </>
)
}

export default Search