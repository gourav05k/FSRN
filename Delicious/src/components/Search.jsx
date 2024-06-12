import './Search.css'
import { restaurant_details } from '../utils/mockData';
import { useState } from 'react';

function Search(props) {

    const [searchText, updateSearchText] = useState("");

    function filterResults() {
        console.log("search text:", searchText);
        props.SearchRestaurants(searchText);
    }

    return (
        <>
            <div className="search">
                <input className="searchBar" type="text" name="searchBar" id="searchBar" onChange={e => {
                    updateSearchText(e.target.value);
                }
                } />
                <button className='searchButton' onClick={filterResults}>Search</button>
            </div>
        </>
    )
}

export default Search