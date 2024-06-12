import { restaurant_details } from '../utils/mockData';
import './FastDelivery.css'

function FastDelivery(props) {

    function FastDeliveringRestaurants(){
        props.fastRestaurants();
    } 

    return (
        <>
            <button onClick={FastDeliveringRestaurants}>Fast Delivery</button>
        </>
    )
}
export default FastDelivery;