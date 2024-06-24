import { baseImageUrl } from '../utils/mockData'
import './RestaurantCard.css'

function Restaurantcard(props) {

    const restaurant = props.restaurant;
    // console.log("hi restaurant",restaurant);
    // console.log("restaurant.imageId", restaurant.imageId);

    return (
        <>
            <div className="card-container">
                <div className="image-and-text">
                    <img src={`${baseImageUrl}${restaurant.imageId}`} alt="food image" />
                    <h3 className="offer">{restaurant.offer} </h3>
                </div>
                <div className="details">
                    <span className="restaurant">{restaurant.name}</span>
                    <div className='rating-delivery'>
                        <span className='rating'>{restaurant.rating}</span>
                        <span className='delivery-time'>{restaurant.deliveryTime}</span>
                    </div>
                    <span>{restaurant.cuisine}</span>
                    <span>{restaurant.location}</span>
                </div>
            </div>
        </>
    )
}

export default Restaurantcard