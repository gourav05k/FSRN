// import './Search.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRestaurants } from '../utils/searchSlice';

function Search() {

    const [searchText, updateSearchText] = useState("");

    console.log("search component Mounted ************");
    console.log("search input:", searchText);
    const dispatch = useDispatch();

    const filterRestaurants = () => {
        dispatch(searchRestaurants(searchText));
    }

    useEffect(() => {
        filterRestaurants();
    }, [searchText])

    return (
        <>
            <form className="max-w-md mx-auto flex gap-2 items-center">
                <label htmlFor="default-search" className="mb-2 text-sm font-mediu sr-only text-black">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" name="searchBar" id="default-search"
                        className="block w-full h-4 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:border-black-500 bg-white placeholder-gray-400 focus:ring-black-500 "
                        placeholder="Search Resturants" required
                        onChange={(e) => {
                            updateSearchText(e.target.value);
                        }}
                    />
                    {/* <button className=' bg-white' onClick={filterRestaurants}>Search</button> */}
                </div>
            </form>
        </>
    )
}

export default Search