// import { restaurant_details } from '../utils/mockData';
// import './FastDelivery.css'

function FastDelivery(props) {

    function FastDeliveringRestaurants() {
        props.fastRestaurants();
    }

    return (
        <button onClick={FastDeliveringRestaurants} className='px-6 py-1 bg-white rounded-full border border-gray-200 focus:bg-gray-100 focus:ring-1 focus:ring-gray-400'>Fast Delivery</button>
    )
}
export default FastDelivery;