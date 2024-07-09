import { baseImageUrl } from '../utils/baseData'
function Restaurantcard(props) {

    const restaurant = props.restaurant;
    // console.log("hi restaurant",restaurant);
    // console.log("restaurant.imageId", restaurant.imageId);

    return (
        <>
          <div className="relative border rounded-lg overflow-hidden transition ease-linear hover:scale-95 ">
                <img src={`${baseImageUrl}${restaurant.imageId}`} alt="food image" className="w-full h-40 object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent h-40 bottom-0"></div>
                <h3 className="absolute bottom-28 left-0 px-2 pb-2 text-2xl font-bold text-white truncate overflow-hidden">
                    {restaurant.offer}
                </h3>
                <div className="px-2 py-2">
                    <h3 className="text-base font-bold text-gray-900 truncate">{restaurant.name}</h3>
                    <div className='flex items-center mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fbbf24" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p className="ml-1 mr-4 text-sm font-medium text-gray-900 truncate">{restaurant.rating}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <p className="ml-1 text-sm font-medium text-gray-900 truncate">{restaurant.deliveryTime}</p>
                    </div>
                    <h6 className="mt-1 text-sm font-semibold text-gray-600 truncate">{restaurant.cuisine}</h6>
                    <h6 className="mb-2 text-sm font-medium text-gray-600 truncate">{restaurant.location}</h6>
                </div>
            </div>

        </>
    )
}

export default Restaurantcard;

