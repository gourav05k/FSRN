// import { restaurant_details } from '../utils/mockData';
// import './FastDelivery.css'

function FastDelivery(props) {

    function FastDeliveringRestaurants() {
        props.fastRestaurants();
    }

    return (
        <button onClick={FastDeliveringRestaurants} className='px-6 py-1 bg-white rounded-full shadow-md focus:bg-gray-200 focus:ring-2 focus:ring-orange-300'>Fast Delivery</button>
    )
}
export default FastDelivery;