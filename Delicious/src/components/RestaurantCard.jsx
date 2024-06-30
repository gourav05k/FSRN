import { baseImageUrl } from '../utils/mockData'
// import './RestaurantCard.css'

function Restaurantcard(props) {

    const restaurant = props.restaurant;
    // console.log("hi restaurant",restaurant);
    // console.log("restaurant.imageId", restaurant.imageId);

    return (
        <>
            <div className="group" >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 transition ease-linear hover:scale-95">
                    <img src={`${baseImageUrl}${restaurant.imageId}`} alt="food image" className="h-full w-full object-cover object-center"/>
                    <h3 className="offer">{restaurant.offer} </h3>
                </div>
                <div className="details">
                    <span className="mt-1 text-lg font-medium text-gray-900">{restaurant.name}</span>
                    <div className='rating-delivery'>
                        <span className="mt-1 text-lg font-medium text-gray-900">{restaurant.rating}</span>
                        <span className="mt-1 text-lg font-medium text-gray-900">{restaurant.deliveryTime}</span>
                    </div>
                    <h5>{restaurant.cuisine}</h5>
                    <h5>{restaurant.location}</h5>
                </div>
            </div>
        </>
    )
}

export default Restaurantcard