import { useState } from "react";

function IsVeg(props) {

    const [enableFilter, setEnableFilter] = useState(false);

    const handleFilterButtonClick = () => {
        setEnableFilter(!enableFilter);
        props.filterVegRestaurants();
    };

    return (
        <button
            onClick={handleFilterButtonClick}
            className="px-6 py-1 bg-white rounded-full border border-gray-200 focus:bg-gray-100 focus:ring-1 focus:ring-gray-400 flex items-center justify-between">
            <h6 className="min-w-max w-full">
                Only Veg
            </h6>
            {enableFilter &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 text-gray-500 hover:text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            }
        </button>
    )
}

export default IsVeg;